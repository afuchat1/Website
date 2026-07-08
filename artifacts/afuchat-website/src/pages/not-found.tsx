import { Link } from 'wouter';
import { Home as HomeIcon } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center container-pad text-center">
      <div className="w-16 h-16 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl flex items-center justify-center mb-6">
        <span className="text-2xl font-bold text-[#0F172A]">404</span>
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">Page not found</h1>
      <p className="text-lg text-[#64748B] mb-8 max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        href="/"
        className="flex items-center gap-2 px-6 py-3 bg-[#1F95FF] text-white rounded-xl font-medium hover:bg-[#0F7AE0] transition-colors"
      >
        <HomeIcon className="w-4 h-4" />
        Back to Home
      </Link>
    </div>
  );
}