import { ReactNode } from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

// Each page owns and renders its own <Footer /> independently, right after
// its own content — there is no single shared footer stretched across
// every route here.
export function Layout({ children }: LayoutProps) {
  return (
    <div className="w-full">
      <Navbar />
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
}