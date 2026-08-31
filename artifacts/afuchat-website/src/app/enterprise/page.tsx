import type { Metadata } from 'next';
import GenericPage from '@/views/GenericPage';

export const metadata: Metadata = {
  title: 'Enterprise — AfuChat',
  description: 'AfuChat enterprise plans with advanced security controls, custom domain support, audit logging, SSO, SCIM provisioning, and dedicated infrastructure.',
  alternates: { canonical: 'https://afuchat.com/enterprise' },
};
export default function Page() { return <GenericPage title="Enterprise" type="enterprise" />; }
