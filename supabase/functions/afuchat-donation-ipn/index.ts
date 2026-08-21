import { createClient } from "npm:@supabase/supabase-js@2";

const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
const admin = createClient(supabaseUrl, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "", {
  auth: { persistSession: false },
});
const base = (Deno.env.get("PESAPAL_ENV") || "live") === "sandbox"
  ? "https://cybqa.pesapal.com/pesapalv3"
  : "https://pay.pesapal.com/v3";

async function token() {
  const response = await fetch(`${base}/api/Auth/RequestToken`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      consumer_key: Deno.env.get("PESAPAL_CONSUMER_KEY") ?? "",
      consumer_secret: Deno.env.get("PESAPAL_CONSUMER_SECRET") ?? "",
    }),
  });
  if (!response.ok) throw new Error("Pesapal authentication failed");
  const data = await response.json();
  return data.token as string;
}

Deno.serve(async (request) => {
  try {
    const body = request.method === "POST" ? await request.json().catch(() => ({})) : {};
    const url = new URL(request.url);
    const trackingId = body.OrderTrackingId || body.order_tracking_id || url.searchParams.get("OrderTrackingId");
    const merchantReference = body.OrderMerchantReference || body.OrderMerchantReference || url.searchParams.get("OrderMerchantReference");

    if (!trackingId || !merchantReference) {
      return new Response(JSON.stringify({ error: "Missing Pesapal order identifiers" }), { status: 400 });
    }

    const response = await fetch(
      `${base}/api/Transactions/GetTransactionStatus?orderTrackingId=${encodeURIComponent(trackingId)}`,
      { headers: { Accept: "application/json", Authorization: `Bearer ${await token()}` } },
    );
    const status = await response.json();
    const description = String(status.payment_status_description || "").toUpperCase();
    const nextStatus = description === "COMPLETED"
      ? "completed"
      : ["FAILED", "INVALID", "CANCELLED"].includes(description) ? "failed" : "pending";

    await admin.from("afuchat_donations").update({
      tracking_id: trackingId,
      status: nextStatus,
      payment_method: status.payment_method || null,
      confirmation_code: status.confirmation_code || null,
      paid_at: nextStatus === "completed" ? new Date().toISOString() : null,
      updated_at: new Date().toISOString(),
    }).eq("merchant_reference", merchantReference);

    return new Response(JSON.stringify({
      orderNotificationType: "IPNCHANGE",
      orderTrackingId: trackingId,
      orderMerchantReference: merchantReference,
    }), { headers: { "Content-Type": "application/json" } });
  } catch (error) {
    console.error("[afuchat-donation-ipn]", error);
    return new Response(JSON.stringify({ error: "IPN processing failed" }), { status: 500 });
  }
});