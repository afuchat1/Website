import { createClient } from '@supabase/supabase-js';

// Public Supabase credentials — safe to ship in client bundles.
// The anon key is intentionally distributable and gated by RLS on the server.
export const supabase = createClient(
  'https://rhnsjqqtdzlkvqazfcbg.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJobnNqcXF0ZHpsa3ZxYXpmY2JnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE2NzA4NjksImV4cCI6MjA3NzI0Njg2OX0.j8zuszO1K6Apjn-jRiVUyZeqe3Re424xyOho9qDl_oY',
);
