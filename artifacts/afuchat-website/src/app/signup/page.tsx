import type { Metadata } from 'next';
import SignupClient from '@/views/Signup';

export const metadata: Metadata = {
  title: 'Create Your Free Account — AfuChat',
  description:
    'Sign up for free and access every AfuChat product with a single account. One identity, zero friction — AfuMail, AfuChat, AfuAI, AfuCloud, and more.',
  alternates: { canonical: 'https://web.afuchat.com/signup' },
};

export default function Page() {
  return <SignupClient />;
}
