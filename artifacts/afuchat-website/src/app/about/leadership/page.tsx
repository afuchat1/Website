import type { Metadata } from 'next';
import GenericPage from '@/views/GenericPage';

export const metadata: Metadata = {
  title: 'Leadership — AfuChat',
  description: 'Meet the AfuChat leadership team. Decades of experience in consumer internet, enterprise software, and applied AI, united by a shared vision.',
  alternates: { canonical: 'https://web.afuchat.com/about/leadership' },
};
export default function Page() { return <GenericPage title="Leadership" type="leadership" />; }
