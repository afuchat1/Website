import { ReactNode, useEffect } from 'react';
import { useLocation } from 'wouter';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

// Each page owns and renders its own <Footer /> independently, right after
// its own content — there is no single shared footer stretched across
// every route here.
export function Layout({ children }: LayoutProps) {
  const [location] = useLocation();

  // Every navigation (e.g. clicking a product link in the footer while
  // scrolled to the bottom of the previous page) must land at the top of
  // the newly loaded page, not wherever the scroll happened to be.
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [location]);

  return (
    <div className="w-full">
      <Navbar />
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
}