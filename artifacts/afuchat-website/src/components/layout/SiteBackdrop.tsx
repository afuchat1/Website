'use client';

import { useEffect } from 'react';

export default function SiteBackdrop() {
  useEffect(() => {
    const root = document.documentElement;
    const onMove = (event: PointerEvent) => {
      root.style.setProperty('--pointer-x', `${event.clientX}px`);
      root.style.setProperty('--pointer-y', `${event.clientY}px`);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <div className="site-backdrop" aria-hidden="true">
      <div className="site-backdrop-wash" />
      <div className="site-backdrop-grid" />
      <div className="site-backdrop-cursor" />
      <div className="site-backdrop-orb site-backdrop-orb-one" />
      <div className="site-backdrop-orb site-backdrop-orb-two" />
      <div className="site-backdrop-orb site-backdrop-orb-three" />
      <div className="site-backdrop-ring site-backdrop-ring-one" />
      <div className="site-backdrop-ring site-backdrop-ring-two" />
      <div className="site-backdrop-illustration site-backdrop-illustration-one">
        <span className="illustration-device illustration-phone" />
        <span className="illustration-device illustration-screen" />
        <span className="illustration-node illustration-node-one" />
        <span className="illustration-node illustration-node-two" />
      </div>
      <div className="site-backdrop-illustration site-backdrop-illustration-two">
        <span className="illustration-orbit illustration-orbit-one" />
        <span className="illustration-orbit illustration-orbit-two" />
        <span className="illustration-core" />
      </div>
      <div className="site-backdrop-noise" />
    </div>
  );
}
