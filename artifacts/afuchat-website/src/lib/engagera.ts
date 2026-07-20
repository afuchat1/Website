import { createClient } from '@supabase/supabase-js';

// Engagera Supabase — same project as AfuChat.
// The service-role key is used here read-only to fetch aggregate token stats
// from engagera_usage_records, which is behind RLS that blocks the anon role.
// No user data is exposed: this module only reads aggregate totals.
const SUPABASE_URL     = 'https://rhnsjqqtdzlkvqazfcbg.supabase.co';
const SERVICE_ROLE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJobnNqcXF0ZHpsa3ZxYXpmY2JnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MTY3MDg2OSwiZXhwIjoyMDc3MjQ2ODY5fQ.2EkaV3a2lgTxVVJUtNpIygnaRg6z45qR4OjM4M16qMs';

export const engagera = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false,
    storageKey: 'engagera-stats',
  },
});

export interface TokenStats {
  total_tokens:  number;
  input_tokens:  number;
  output_tokens: number;
  request_count: number;
}

/** Fetch all-time aggregate token usage from engagera_usage_records. */
export async function fetchTokenStats(): Promise<TokenStats> {
  const { data, error } = await engagera
    .from('engagera_usage_records')
    .select('total_tokens, input_tokens, output_tokens');

  if (error) throw error;

  const rows = (data ?? []) as { total_tokens: number; input_tokens: number; output_tokens: number }[];
  return {
    total_tokens:  rows.reduce((s, r) => s + (r.total_tokens  ?? 0), 0),
    input_tokens:  rows.reduce((s, r) => s + (r.input_tokens  ?? 0), 0),
    output_tokens: rows.reduce((s, r) => s + (r.output_tokens ?? 0), 0),
    request_count: rows.length,
  };
}
