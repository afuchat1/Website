import type { Metadata } from 'next';
import DevelopersClient from '@/pages/Developers';

export const metadata: Metadata = {
  title: 'Developer Platform — AfuChat',
  description:
    'Build on AfuChat with REST and GraphQL APIs, real-time WebSocket events, open-source SDKs for React, Node.js, Python, iOS, and Android. AfuMail SSO included.',
  alternates: { canonical: 'https://web.afuchat.com/developers' },
};

export default function Page() {
  return <DevelopersClient />;
}
