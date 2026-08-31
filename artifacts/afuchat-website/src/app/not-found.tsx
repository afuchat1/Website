import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Home } from 'lucide-react';
import Footer from '@/components/layout/Footer';
import { illSecHelp } from '@/data/illustrations';

export const metadata = {
  title: 'Page Not Found: AfuChat',
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
        <div className="max-container container-pad flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-16 text-center sm:py-20">
          <div className="relative w-full max-w-3xl">
            <div className="relative mx-auto aspect-square w-[min(68vw,20rem)]">
              <Image
                src={illSecHelp}
                alt="AfuChat avatar"
                fill
                sizes="(max-width: 640px) 72vw, 416px"
                className="object-contain drop-shadow-[0_24px_30px_rgba(31,122,255,0.2)]"
                priority
              />
            </div>
            <h1 className="mt-2 text-[clamp(5.5rem,15vw,10rem)] font-black leading-[0.78] tracking-[-0.09em] text-white">
              404
            </h1>
            <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              Page not found
            </h2>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-white/45">
              The page you&apos;re looking for doesn&apos;t exist.
            </p>

            <div className="mt-7">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#1f7aff] to-[#6c63ff] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(31,122,255,0.22)] transition hover:-translate-y-0.5 hover:opacity-90"
              >
                <Home size={16} strokeWidth={2.5} />
                Back to home
                <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
