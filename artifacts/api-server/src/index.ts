import express from 'express';
import cors from 'cors';

const app = express();
const PORT = parseInt(process.env.PORT || '8080');

app.use(cors());
app.use(express.json());

/* ─────────────────────────────────────────────
   IN-MEMORY CACHE — 60s TTL
───────────────────────────────────────────── */
interface TokenStats {
  total_tokens: number;
  input_tokens: number;
  output_tokens: number;
  request_count: number;
  fetched_at: string;
}

let cache: { data: TokenStats; ts: number } | null = null;
const CACHE_TTL_MS = 60_000;

const SUPABASE_PROJECT_ID = 'rhnsjqqtdzlkvqazfcbg';

async function fetchTokenStats(): Promise<TokenStats> {
  const pat = process.env.ENGAGERA_SUPABASE_PAT;
  if (!pat) {
    console.warn('[engagera] ENGAGERA_SUPABASE_PAT not set — returning zeros');
    return { total_tokens: 0, input_tokens: 0, output_tokens: 0, request_count: 0, fetched_at: new Date().toISOString() };
  }

  const res = await fetch(
    `https://api.supabase.com/v1/projects/${SUPABASE_PROJECT_ID}/database/query`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${pat}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          SELECT
            COALESCE(SUM(total_tokens), 0)::bigint   AS total_tokens,
            COALESCE(SUM(input_tokens), 0)::bigint   AS input_tokens,
            COALESCE(SUM(output_tokens), 0)::bigint  AS output_tokens,
            COUNT(*)::bigint                          AS request_count
          FROM public.engagera_usage_records
        `,
      }),
    },
  );

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Supabase query failed: ${res.status} ${text}`);
  }

  const rows = (await res.json()) as Array<{
    total_tokens: string;
    input_tokens: string;
    output_tokens: string;
    request_count: string;
  }>;

  const row = rows[0] ?? { total_tokens: '0', input_tokens: '0', output_tokens: '0', request_count: '0' };

  return {
    total_tokens: parseInt(row.total_tokens, 10),
    input_tokens: parseInt(row.input_tokens, 10),
    output_tokens: parseInt(row.output_tokens, 10),
    request_count: parseInt(row.request_count, 10),
    fetched_at: new Date().toISOString(),
  };
}

/* ─────────────────────────────────────────────
   ROUTES
───────────────────────────────────────────── */
app.get('/api/engagera/stats', async (_req, res) => {
  try {
    const now = Date.now();
    if (!cache || now - cache.ts > CACHE_TTL_MS) {
      cache = { data: await fetchTokenStats(), ts: now };
    }
    res.json({ ok: true, data: cache.data });
  } catch (err) {
    console.error('[engagera] stats fetch error', err);
    res.status(500).json({ ok: false, error: String(err) });
  }
});

app.get('/api/healthz', (_req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`[api-server] listening on :${PORT}`);
});
