'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isMovies = pathname === '/products/afumovies';

  if (isMovies) {
    return <main>{children}</main>;
  }

  return (
    <>
      <Navbar />
      <main className="pt-16">{children}</main>
    </>
  );
}