import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Home } from 'lucide-react';
import Footer from '@/components/layout/Footer';
import { illSecHelp } from '@/data/illustrations';

export const metadata = {
  title: 'Page Not Found — AfuChat',
  description: 'The AfuChat page you requested could not be found.',
};

export default function NotFound() {
  return (
    <div className="w-full overflow-hidden">
      <section className="relative isolate min-h-[calc(100vh-4rem)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1f7aff]/10 blur-[120px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-16 -z-10 h-72 w-72 rounded-full bg-[#6c63ff]/10 blur-[100px]"
        />

        <div className="max-container container-pad grid min-h-[calc(100vh-4rem)] grid-cols-1 items-center gap-10 py-16 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-6 lg:py-24">
          <div className="relative z-10 max-w-xl text-center lg:text-left">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#4ba3ff]/20 bg-[#1f7aff]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#68b5ff] sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4ba3ff] shadow-[0_0_10px_#4ba3ff]" />
              Signal lost
            </p>
            <h1 className="text-[clamp(5.5rem,15vw,10rem)] font-black leading-[0.78] tracking-[-0.09em] text-white">
              404
            </h1>
            <h2 className="mt-8 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              This page wandered off.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-white/50 sm:text-base lg:mx-0">
              Our avatar checked the network, but the destination you entered
              isn&apos;t here. Let&apos;s get you back to something useful.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#1f7aff] to-[#6c63ff] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(31,122,255,0.22)] transition hover:-translate-y-0.5 hover:opacity-90"
              >
                <Home size={16} strokeWidth={2.5} />
                Back to home
                <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3.5 text-sm font-semibold text-white/65 transition hover:border-white/25 hover:bg-white/5 hover:text-white"
              >
                Explore products
              </Link>
            </div>

            <Link
              href="/"
              className="mt-8 inline-flex items-center gap-2 text-xs font-semibold text-white/35 transition hover:text-white/70"
            >
              <ArrowLeft size={14} />
              Return to the AfuChat universe
            </Link>
          </div>

          <div className="relative mx-auto flex w-full max-w-[34rem] items-center justify-center lg:justify-end">
            <div
              aria-hidden="true"
              className="absolute h-[72%] w-[72%] rounded-full border border-[#55c7ff]/15 bg-[#1f7aff]/[0.04] shadow-[0_0_100px_rgba(31,122,255,0.14)]"
            />
            <div
              aria-hidden="true"
              className="absolute h-[88%] w-[88%] rounded-full border border-dashed border-white/10"
            />
            <div
              aria-hidden="true"
              className="absolute right-[7%] top-[8%] rounded-2xl border border-white/10 bg-[#0b1731]/80 px-4 py-3 shadow-2xl backdrop-blur-sm"
            >
              <span className="block text-[9px] font-bold uppercase tracking-[0.18em] text-white/35">
                Status
              </span>
              <span className="mt-1 flex items-center gap-2 text-xs font-semibold text-[#77d9c5]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#77d9c5]" />
                Looking around
              </span>
            </div>
            <div className="relative aspect-square w-[84%]">
              <Image
                src={illSecHelp}
                alt="AfuChat avatar searching for the missing page"
                fill
                sizes="(max-width: 1024px) 70vw, 440px"
                className="object-contain drop-shadow-[0_24px_30px_rgba(31,122,255,0.2)]"
                priority
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute bottom-[7%] left-[8%] rounded-2xl border border-white/10 bg-[#0b1731]/85 px-4 py-3 shadow-2xl backdrop-blur-sm"
            >
              <span className="block text-[9px] font-bold uppercase tracking-[0.18em] text-white/35">
                Error code
              </span>
              <span className="mt-1 block text-sm font-extrabold tracking-wider text-white">
                AFU-404
              </span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
