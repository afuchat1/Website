/**
 * Minimal Pages-Router _error override required when using
 * `output: 'export'` with the Next.js App Router.
 * Without this, Next.js's built-in /_error page tries to import
 * <Html> from next/document which is incompatible with App Router
 * and breaks the static export. This stub prevents that crash.
 */
export default function Error() {
  return null;
}
