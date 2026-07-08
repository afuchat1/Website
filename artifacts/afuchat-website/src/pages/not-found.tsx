import { Link } from 'wouter';
import { Home as HomeIcon } from 'lucide-react';
import Footer from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <div className="w-full">
      <div className="min-h-[70vh] flex flex-col items-center justify-center container-pad text-center">
        <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mb-6 border border-white/8">
          <span className="text-2xl font-extrabold text-white/60">404</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Page not found</h1>
        <p className="text-lg text-white/45 mb-8 max-w-md">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#1F7AFF] to-[#6C63FF] text-white rounded-full font-medium hover:opacity-90 transition-opacity"
        >
          <HomeIcon className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
      <Footer />
    </div>
  );
}
