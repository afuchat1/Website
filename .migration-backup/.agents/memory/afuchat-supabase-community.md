---
name: AfuChat website — Supabase community data
description: Decisions for wiring real (non-mocked) AfuChat member/profile data from Supabase into the corporate website.
---

- Real member/profile data comes from the Supabase project backing `afuchat.new` (not "AfuMail", the other project on the account) — a `public_profiles` view of `profiles` curated to public-safe columns (handle, display_name, avatar_url, is_verified, country, current_grade, xp, created_at, is_private, is_banned, etc.).
- Access uses `SUPABASE_URL` + `SUPABASE_ANON_KEY` only (env vars) — no service-role key, no personal access token stored anywhere. The anon key is safe to keep as a plain (non-secret) env var because it's client-distributable by design and gated by the project's own RLS/grants; it was never treated as a high-privilege secret.
- All server-side queries (`artifacts/api-server/src/routes/community.ts`) are SELECT-only, and always filter `is_private = false` AND `is_banned = false` — apply this filter consistently to *every* aggregate/query that touches this data (stats counts, member lists, any future additions), not just the list endpoint, or the numbers will disagree.
- There are no real customer testimonial/review tables tied to this product — don't fabricate quotes attributed to real users. Prefer real aggregate stats + real profile display (avatar/name/badges) over invented text.
- When surfacing this data in small always-visible UI (e.g. a hero trust badge), gate on *each* independent query separately with its own fallback copy — don't interpolate one query's optional field directly into text that's shown whenever a *different* query's data is present, or you can render malformed output (e.g. "Trusted by  real members" with a blank).
