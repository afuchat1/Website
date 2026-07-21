import { NextResponse } from 'next/server';

const PACKAGE = '@afuchat1/engagera';
const NPM_URL = `https://registry.npmjs.org/${encodeURIComponent(PACKAGE)}/latest`;

// Revalidate every hour — new releases are rare, no need to hit npm on every request.
export const revalidate = 3600;

export async function GET() {
  try {
    const res = await fetch(NPM_URL, {
      headers: { Accept: 'application/json' },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return NextResponse.json({ version: null }, { status: 200 });
    }

    const data = await res.json();
    return NextResponse.json({ version: data.version ?? null });
  } catch {
    return NextResponse.json({ version: null }, { status: 200 });
  }
}
