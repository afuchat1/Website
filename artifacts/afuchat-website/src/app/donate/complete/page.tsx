'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CheckCircle2, Loader2, XCircle } from 'lucide-react';

const STATUS_ENDPOINT = 'https://rhnsjqqtdzlkvqazfcbg.supabase.co/functions/v1/afuchat-donation-status';

export default function DonationCompletePage() {
  const [status, setStatus] = useState<'checking' | 'completed' | 'pending' | 'failed'>('checking');

  useEffect(() => {
    const reference = new URLSearchParams(window.location.search).get('OrderMerchantReference');
    if (!reference) {
      setStatus('pending');
      return;
    }
    let cancelled = false;
    let attempts = 0;
    const check = async () => {
      try {
        const response = await fetch(`${STATUS_ENDPOINT}?merchant_reference=${encodeURIComponent(reference)}`);
        const data = await response.json();
        if (cancelled) return;
        if (data.status === 'completed') setStatus('completed');
        else if (data.status === 'failed' || data.status === 'cancelled') setStatus('failed');
        else if (attempts < 5) {
          attempts += 1;
          window.setTimeout(check, 2500);
        } else setStatus('pending');
      } catch {
        if (!cancelled) setStatus('pending');
      }
    };
    check();
    return () => { cancelled = true; };
  }, []);

  const content = {
    checking: { icon: <Loader2 className="h-8 w-8 animate-spin text-[#51e6b7]" />, title: 'Confirming your support…', body: 'Pesapal is confirming the payment. This will only take a moment.' },
    completed: { icon: <CheckCircle2 className="h-8 w-8 text-[#51e6b7]" />, title: 'Thank you for supporting AfuChat.', body: 'Your contribution was received successfully.' },
    pending: { icon: <Loader2 className="h-8 w-8 text-[#51e6b7]" />, title: 'Payment submitted.', body: 'Pesapal is still confirming the payment. If you completed checkout, your support will be recorded shortly.' },
    failed: { icon: <XCircle className="h-8 w-8 text-red-300" />, title: 'Payment was not completed.', body: 'No donation was recorded. You can try again whenever you are ready.' },
  }[status];

  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#040c1e] px-5 py-20">
      <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#0b1b3b] p-8 text-center shadow-2xl">
        <div className="mb-5 flex justify-center">{content.icon}</div>
        <h1 className="text-2xl font-bold text-white">{content.title}</h1>
        <p className="mt-3 text-sm leading-relaxed text-white/55">{content.body}</p>
        <Link href="/" className="mt-7 inline-flex rounded-md bg-[#00c48c] px-5 py-3 text-sm font-bold text-[#031c25] hover:bg-[#51e6b7]">Return to AfuChat</Link>
      </div>
    </main>
  );
}