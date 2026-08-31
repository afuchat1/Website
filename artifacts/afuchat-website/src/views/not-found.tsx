import Link from 'next/link';
import Footer from '@/components/layout/Footer';

export default function NotFoundPage() {
  return (
    <div className="w-full">
      <div className="max-container container-pad flex flex-col items-center justify-center py-40 text-center gap-6">
        <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center text-3xl font-bold text-white/40">
          404
        </div>
        <h1 className="text-3xl font-bold text-white tracking-tight">Page not found</h1>
        <p className="text-white/40 max-w-sm">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-gradient-to-r from-[#1F7AFF] to-[#6C63FF] text-white font-bold rounded-full hover:opacity-90 transition-opacity"
        >
          🏠 Back to Home
        </Link>
      </div>
      <Footer />
    </div>
  );
}
