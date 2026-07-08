import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('SUPABASE_URL and SUPABASE_ANON_KEY must be set');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
