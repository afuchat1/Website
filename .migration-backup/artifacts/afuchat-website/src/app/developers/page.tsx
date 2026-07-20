import type { Metadata } from 'next';
import DevelopersClient from '@/views/Developers';

export const metadata: Metadata = {
  title: 'Developer Platform — AfuChat',
  description:
    'Build on AfuChat with REST and GraphQL APIs, real-time WebSocket events, open-source SDKs for React, Node.js, Python, iOS, and Android. AfuMail SSO included.',
  alternates: { canonical: 'https://afuchat.com/developers' },
};

export default function Page() {
  return <DevelopersClient />;
}
