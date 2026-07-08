import { createClient } from '@supabase/supabase-js';

// Vite exposes env vars whose names start with the configured envPrefix.
// In dev: SUPABASE_URL / SUPABASE_ANON_KEY are injected by Replit's shared env.
// In production (Vercel): set SUPABASE_URL and SUPABASE_ANON_KEY in project env vars.
const supabaseUrl = import.meta.env.SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY as string | undefined;

// Log a warning in dev if the vars are missing, but never throw — a missing
// Supabase client should degrade gracefully (queries return no data), not crash
// the entire app.
if (import.meta.env.DEV && (!supabaseUrl || !supabaseAnonKey)) {
  console.warn('[supabase] SUPABASE_URL or SUPABASE_ANON_KEY is not set. Community data will not load.');
}

export const supabase = createClient(
  supabaseUrl ?? 'https://placeholder.supabase.co',
  supabaseAnonKey ?? 'placeholder',
);
