'use client';

import Script from 'next/script';
import { useCallback, useRef } from 'react';
import {
  TRUSTPILOT_BUSINESS_UNIT_ID,
  TRUSTPILOT_CAROUSEL_TEMPLATE_ID,
  TRUSTPILOT_PROFILE_URL,
} from '@/data/trustpilot';

declare global {
  interface Window {
    Trustpilot?: {
      loadFromElement: (element: HTMLElement, forceReload?: boolean) => void;
    };
  }
}

export default function TrustpilotCarousel({ className = '' }: { className?: string }) {
  const widgetRef = useRef<HTMLDivElement>(null);

  const loadWidget = useCallback(() => {
    if (widgetRef.current && window.Trustpilot) {
      window.Trustpilot.loadFromElement(widgetRef.current, true);
    }
  }, []);

  return (
    <div className={`trustpilot-carousel ${className}`}>
      <div
        ref={widgetRef}
        className="trustpilot-widget"
        data-locale="en-GB"
        data-template-id={TRUSTPILOT_CAROUSEL_TEMPLATE_ID}
        data-businessunit-id={TRUSTPILOT_BUSINESS_UNIT_ID}
        data-style-height="130px"
        data-style-width="100%"
        data-theme="dark"
        data-group="on"
        data-stars="1,2,3,4,5"
      >
        <a href={TRUSTPILOT_PROFILE_URL} target="_blank" rel="noopener noreferrer">
          Trustpilot
        </a>
      </div>
      <Script
        src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        strategy="afterInteractive"
        onReady={loadWidget}
      />
    </div>
  );
}