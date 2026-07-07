import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-[#050A0F]">
      <Navbar />
      <main className="flex-grow pt-[60px] relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
