import type { Metadata } from 'next';
import GenericPage from '@/pages/GenericPage';

export const metadata: Metadata = {
  title: 'Contact — AfuChat',
  description: 'Get in touch with AfuChat. Product support, partnership inquiries, press requests, and enterprise sales — we respond within one business day.',
  alternates: { canonical: 'https://web.afuchat.com/contact' },
};
export default function Page() { return <GenericPage title="Contact" type="contact" />; }
