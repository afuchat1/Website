import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "content-type",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
};
const admin = createClient(
  Deno.env.get("SUPABASE_URL") ?? "",
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
  { auth: { persistSession: false } },
);

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (request.method !== "GET") return Response.json({ error: "Method not allowed" }, { status: 405, headers: corsHeaders });
  const reference = new URL(request.url).searchParams.get("merchant_reference")?.trim();
  if (!reference || !reference.startsWith("AFUCHAT-DONATION-")) {
    return Response.json({ error: "Invalid donation reference" }, { status: 400, headers: corsHeaders });
  }
  const { data, error } = await admin
    .from("afuchat_donations")
    .select("merchant_reference, amount, currency, status, updated_at")
    .eq("merchant_reference", reference)
    .maybeSingle();
  if (error || !data) return Response.json({ error: "Donation not found" }, { status: 404, headers: corsHeaders });
  return Response.json(data, { headers: corsHeaders });
});