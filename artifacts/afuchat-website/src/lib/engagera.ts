import { createClient, type RealtimeChannel } from '@supabase/supabase-js';

// Engagera Supabase — same project as AfuChat.
// The service-role key is used here read-only to fetch aggregate token stats.
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

/**
 * Fetch all-time aggregate token usage across all four source tables:
 *   - engagera_usage_records  (total/input/output_tokens)
 *   - engagera_api_logs       (total/input/output_tokens)
 *   - engagera_request_logs   (total/input/output_tokens)
 *   - engagera_messages       (token_count — no input/output split)
 *
 * All four are queried in parallel and summed together.
 */
export async function fetchTokenStats(): Promise<TokenStats> {
  const [usageRes, apiLogsRes, requestLogsRes, messagesRes] = await Promise.all([
    engagera.from('engagera_usage_records').select('total_tokens, input_tokens, output_tokens'),
    engagera.from('engagera_api_logs').select('total_tokens, input_tokens, output_tokens'),
    engagera.from('engagera_request_logs').select('total_tokens, input_tokens, output_tokens'),
    engagera.from('engagera_messages').select('token_count').gt('token_count', 0),
  ]);

  type TIORow  = { total_tokens: number; input_tokens: number; output_tokens: number };
  type MsgRow  = { token_count: number };

  const sumTIO = (rows: TIORow[]) => rows.reduce(
    (acc, r) => ({
      total:  acc.total  + (r.total_tokens  ?? 0),
      input:  acc.input  + (r.input_tokens  ?? 0),
      output: acc.output + (r.output_tokens ?? 0),
      count:  acc.count  + 1,
    }),
    { total: 0, input: 0, output: 0, count: 0 },
  );

  const a = sumTIO((usageRes.data   ?? []) as TIORow[]);
  const b = sumTIO((apiLogsRes.data ?? []) as TIORow[]);
  const c = sumTIO((requestLogsRes.data ?? []) as TIORow[]);
  const msgs = ((messagesRes.data ?? []) as MsgRow[]).reduce(
    (s, r) => s + (r.token_count ?? 0), 0,
  );
  const msgCount = (messagesRes.data ?? []).length;

  return {
    total_tokens:  a.total  + b.total  + c.total  + msgs,
    input_tokens:  a.input  + b.input  + c.input,   // messages has no split
    output_tokens: a.output + b.output + c.output,
    request_count: a.count  + b.count  + c.count  + msgCount,
  };
}

// ─── Real-time delta types ────────────────────────────────────────────────────

type TIORow = { total_tokens: number; input_tokens: number; output_tokens: number };
type MsgRow = { token_count: number };

/**
 * Subscribe to real-time INSERTs across all four token-source tables.
 * Fires `onInsert` with the token delta for each new row so the caller can
 * update running totals without a full refetch.
 *
 * Returns a cleanup function that removes the Realtime channel.
 */
export function subscribeToTokenInserts(
  onInsert: (delta: TokenStats) => void,
): () => void {
  const channel: RealtimeChannel = engagera
    .channel('engagera-all-token-inserts')

    // engagera_usage_records — total/input/output_tokens
    .on<TIORow>('postgres_changes',
      { event: 'INSERT', schema: 'public', table: 'engagera_usage_records' },
      ({ new: r }) => onInsert({
        total_tokens:  r.total_tokens  ?? 0,
        input_tokens:  r.input_tokens  ?? 0,
        output_tokens: r.output_tokens ?? 0,
        request_count: 1,
      }),
    )

    // engagera_api_logs — total/input/output_tokens
    .on<TIORow>('postgres_changes',
      { event: 'INSERT', schema: 'public', table: 'engagera_api_logs' },
      ({ new: r }) => onInsert({
        total_tokens:  r.total_tokens  ?? 0,
        input_tokens:  r.input_tokens  ?? 0,
        output_tokens: r.output_tokens ?? 0,
        request_count: 1,
      }),
    )

    // engagera_request_logs — total/input/output_tokens
    .on<TIORow>('postgres_changes',
      { event: 'INSERT', schema: 'public', table: 'engagera_request_logs' },
      ({ new: r }) => onInsert({
        total_tokens:  r.total_tokens  ?? 0,
        input_tokens:  r.input_tokens  ?? 0,
        output_tokens: r.output_tokens ?? 0,
        request_count: 1,
      }),
    )

    // engagera_messages — token_count only (no input/output split)
    .on<MsgRow>('postgres_changes',
      { event: 'INSERT', schema: 'public', table: 'engagera_messages' },
      ({ new: r }) => {
        const t = r.token_count ?? 0;
        if (t > 0) onInsert({ total_tokens: t, input_tokens: 0, output_tokens: 0, request_count: 1 });
      },
    )

    .subscribe();

  return () => { engagera.removeChannel(channel); };
}
