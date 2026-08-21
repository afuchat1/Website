'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2, Heart, Loader2 } from 'lucide-react';

const DONATION_ENDPOINT = 'https://rhnsjqqtdzlkvqazfcbg.supabase.co/functions/v1/afuchat-donation-initiate';
const PRESETS = [5000, 10000, 25000, 50000];

function formatAmount(amount: number, currency: string) {
  return new Intl.NumberFormat('en-UG', {
    style: 'currency',
    currency,
    maximumFractionDigits: currency === 'UGX' ? 0 : 2,
  }).format(amount);
}

export default function DonationSection() {
  const [amount, setAmount] = useState(10000);
  const [currency, setCurrency] = useState('UGX');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [state, setState] = useState<'idle' | 'loading' | 'error' | 'success'>('idle');
  const [error, setError] = useState('');

  async function startDonation(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState('loading');
    setError('');

    try {
      const response = await fetch(DONATION_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, currency, name, email, message }),
      });
      const data = await response.json();
      if (!response.ok || !data.redirect_url) {
        throw new Error(data.error || 'Unable to start checkout');
      }
      setState('success');
      window.location.assign(data.redirect_url);
    } catch (err) {
      setState('error');
      setError(err instanceof Error ? err.message : 'Unable to start checkout');
    }
  }

  return (
    <section id="support" className="relative overflow-hidden border-y border-white/8 bg-[#071531]">
      <div className="max-container container-pad py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#00c48c]/25 bg-[#00c48c]/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#51e6b7]">
              <Heart className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
              Support AfuChat
            </div>
            <h2 className="max-w-xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Help us keep building useful products for everyone.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/55">
              Your support helps AfuChat maintain our services, improve accessibility, and keep independent digital tools moving forward.
            </p>
            <p className="mt-4 text-sm text-white/35">
              Payments are securely handled by Pesapal. AfuChat does not store card details.
            </p>
          </div>

          <form onSubmit={startDonation} className="rounded-2xl border border-white/10 bg-[#0b1b3b] p-5 shadow-2xl shadow-black/20 sm:p-7">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-white">Choose your support</p>
                <p className="mt-1 text-xs text-white/40">You choose the amount and payment method at checkout.</p>
              </div>
              <select
                value={currency}
                onChange={(event) => setCurrency(event.target.value)}
                className="rounded-md border border-white/10 bg-white/5 px-2.5 py-2 text-xs font-semibold text-white outline-none focus:border-[#00c48c]"
                aria-label="Donation currency"
              >
                <option value="UGX" className="bg-[#0b1b3b]">UGX</option>
                <option value="USD" className="bg-[#0b1b3b]">USD</option>
                <option value="KES" className="bg-[#0b1b3b]">KES</option>
                <option value="TZS" className="bg-[#0b1b3b]">TZS</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {PRESETS.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setAmount(preset)}
                  className={`rounded-md border px-3 py-2.5 text-sm font-semibold transition-colors ${amount === preset ? 'border-[#00c48c] bg-[#00c48c]/15 text-[#51e6b7]' : 'border-white/10 bg-white/[0.03] text-white/65 hover:border-white/25 hover:text-white'}`}
                >
                  {formatAmount(preset, currency)}
                </button>
              ))}
            </div>

            <label className="mt-4 block text-xs font-medium text-white/50">
              Custom amount
              <input
                type="number"
                min="1"
                step="any"
                value={amount}
                onChange={(event) => setAmount(Number(event.target.value))}
                className="mt-1.5 w-full rounded-md border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/25 focus:border-[#00c48c]"
              />
            </label>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Name (optional)" className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/25 focus:border-[#00c48c]" />
              <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email (optional)" className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/25 focus:border-[#00c48c]" />
            </div>
            <textarea value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Leave a message (optional)" rows={2} className="mt-3 w-full resize-none rounded-md border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/25 focus:border-[#00c48c]" />

            {state === 'error' && <p className="mt-3 text-sm text-red-300">{error}</p>}
            {state === 'success' && <p className="mt-3 flex items-center gap-2 text-sm text-[#51e6b7]"><CheckCircle2 className="h-4 w-4" />Opening secure checkout…</p>}
            <button type="submit" disabled={state === 'loading' || state === 'success'} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#00c48c] px-4 py-3 text-sm font-bold text-[#031c25] transition-colors hover:bg-[#51e6b7] disabled:cursor-wait disabled:opacity-60">
              {state === 'loading' ? <Loader2 className="h-4 w-4 animate-spin" /> : <Heart className="h-4 w-4 fill-current" />}
              Support with {formatAmount(amount || 0, currency)}
              {state !== 'loading' && <ArrowRight className="h-4 w-4" />}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}