import type { Metadata } from 'next';
import SignupRedirect from './SignupRedirect';

export const metadata: Metadata = {
  title: 'Create Your Free Account — AfuChat',
  robots: { index: false },
};

export default function SignupPage() {
  return <SignupRedirect />;
}
