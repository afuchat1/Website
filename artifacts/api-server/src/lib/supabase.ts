import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Read-only Supabase client for the AfuChat production database.
 *
 * This connects to the real AfuChat Supabase project so the corporate
 * website can surface genuine, live data (e.g. the community/profiles
 * section). It intentionally uses the `anon` key, which is scoped by the
 * project's Row Level Security policies to only ever read public-safe
 * data — never write. Do not use a service-role key here and do not add
 * any insert/update/delete calls against this client.
 */

let client: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient {
  if (client) return client;

  const url = process.env.SUPABASE_URL;
  const anonKey = process.env.SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    throw new Error(
      "SUPABASE_URL and SUPABASE_ANON_KEY must be set to read community data from Supabase.",
    );
  }

  client = createClient(url, anonKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  return client;
}
