import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
const pesapalEnvironment = Deno.env.get("PESAPAL_ENV") || "live";
const pesapalBase = pesapalEnvironment === "sandbox"
  ? "https://cybqa.pesapal.com/pesapalv3"
  : "https://pay.pesapal.com/v3";
const callbackUrl = "https://afuchat.com/donate/complete";
const ipnUrl = `${supabaseUrl}/functions/v1/afuchat-donation-ipn`;

const admin = createClient(supabaseUrl, serviceRoleKey, {
  auth: { persistSession: false },
});

async function pesapalToken() {
  const response = await fetch(`${pesapalBase}/api/Auth/RequestToken`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      consumer_key: Deno.env.get("PESAPAL_CONSUMER_KEY") ?? "",
      consumer_secret: Deno.env.get("PESAPAL_CONSUMER_SECRET") ?? "",
    }),
  });
  if (!response.ok) throw new Error(`Pesapal authentication failed (${response.status})`);
  const data = await response.json();
  if (!data.token) throw new Error("Pesapal did not return an access token");
  return data.token as string;
}

async function donationIpnId(token: string) {
  const { data } = await admin
    .from("app_settings")
    .select("value")
    .eq("key", "PESAPAL_DONATION_IPN_ID")
    .maybeSingle();
  if (data?.value) return data.value as string;

  const response = await fetch(`${pesapalBase}/api/URLSetup/RegisterIPN`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ url: ipnUrl, ipn_notification_type: "POST" }),
  });
  if (!response.ok) throw new Error(`Pesapal IPN registration failed (${response.status})`);
  const result = await response.json();
  const id = result.ipn_id || result.id;
  if (!id) throw new Error("Pesapal did not return an IPN ID");

  await admin.from("app_settings").upsert({
    key: "PESAPAL_DONATION_IPN_ID",
    value: String(id),
    description: "Pesapal IPN ID for AfuChat donations",
    updated_at: new Date().toISOString(),
  });
  return String(id);
}

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (request.method !== "POST") return json({ error: "Method not allowed" }, 405);

  try {
    const body = await request.json();
    const amount = Number(body.amount);
    const currency = String(body.currency || "UGX").toUpperCase();
    const name = String(body.name || "").trim().slice(0, 120);
    const email = String(body.email || "").trim().slice(0, 254);
    const message = String(body.message || "").trim().slice(0, 500);

    if (!Number.isFinite(amount) || amount <= 0) {
      return json({ error: "Enter a valid donation amount" }, 400);
    }
    if (amount > 100000000) return json({ error: "Donation amount is too large" }, 400);
    if (!["UGX", "USD", "KES", "TZS"].includes(currency)) {
      return json({ error: "Unsupported donation currency" }, 400);
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json({ error: "Enter a valid email address" }, 400);
    }

    const merchantReference = `AFUCHAT-DONATION-${crypto.randomUUID().replaceAll("-", "").slice(0, 24)}`;
    const token = await pesapalToken();
    const ipnId = await donationIpnId(token);
    const firstName = (name.split(/\s+/)[0] || "AfuChat").slice(0, 50);
    const lastName = (name.split(/\s+/).slice(1).join(" ") || "Supporter").slice(0, 50);

    await admin.from("afuchat_donations").insert({
      merchant_reference: merchantReference,
      amount,
      currency,
      supporter_name: name || null,
      supporter_email: email || null,
      message: message || null,
      status: "pending",
    });

    const orderResponse = await fetch(`${pesapalBase}/api/Transactions/SubmitOrderRequest`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        id: merchantReference,
        currency,
        amount,
        description: "Support AfuChat Technologies Limited",
        callback_url: callbackUrl,
        notification_id: ipnId,
        billing_address: {
          email_address: email,
          first_name: firstName,
          last_name: lastName,
        },
      }),
    });
    const orderText = await orderResponse.text();
    if (!orderResponse.ok) throw new Error(`Pesapal order creation failed (${orderResponse.status})`);
    const order = JSON.parse(orderText);

    await admin
      .from("afuchat_donations")
      .update({ tracking_id: order.order_tracking_id || null, updated_at: new Date().toISOString() })
      .eq("merchant_reference", merchantReference);

    return json({
      merchant_reference: merchantReference,
      redirect_url: order.redirect_url || null,
      status: "pending",
    });
  } catch (error) {
    console.error("[afuchat-donation-initiate]", error);
    return json({ error: "Unable to start the donation checkout" }, 500);
  }
});