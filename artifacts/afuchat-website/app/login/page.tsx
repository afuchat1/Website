import type { Metadata } from 'next';
import LoginRedirect from './LoginRedirect';

export const metadata: Metadata = {
  title: 'Log in — AfuChat',
  robots: { index: false },
};

export default function LoginPage() {
  return <LoginRedirect />;
}
