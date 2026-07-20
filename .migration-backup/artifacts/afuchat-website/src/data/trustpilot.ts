// Real reviews for AfuChat Technologies Limited, sourced from Trustpilot.
// https://uk.trustpilot.com/review/afuchat.com
// Do not fabricate additional entries here — only add reviews that actually
// exist on the Trustpilot profile above.

export const TRUSTPILOT_PROFILE_URL = 'https://uk.trustpilot.com/review/afuchat.com';

export const TRUSTPILOT_SUMMARY = {
  rating: 3.7,
  reviewCount: 3,
};

export interface TrustpilotReview {
  author: string;
  country: string;
  rating: number;
  date: string;
  title: string;
  quote: string;
  url: string;
}

export const TRUSTPILOT_REVIEWS: TrustpilotReview[] = [
  {
    author: 'John Bulungu',
    country: 'UG',
    rating: 5,
    date: '10 May 2026',
    title: 'This is the most useful app I have ever…',
    quote: 'This is the most useful app I have ever used',
    url: 'https://uk.trustpilot.com/reviews/6a00b1f880bdf16257a3b684',
  },
  {
    author: 'Zakooza Adrian',
    country: 'UG',
    rating: 4,
    date: '1 June 2026',
    title: 'Its really an amazing application and…',
    quote: "Its really an amazing application and it has almost all the features someone would need it had everything so afuchat is the way to go",
    url: 'https://uk.trustpilot.com/reviews/6a3a79e10759303c9aa0f702',
  },
  {
    author: 'Jjunju Acram',
    country: 'UG',
    rating: 4,
    date: '16 June 2026',
    title: "This app is efficient since it's caters…",
    quote: "This app is efficient since it's caters for all people. It's good and I recommend you all to use this app.",
    url: 'https://uk.trustpilot.com/reviews/6a3133f58bf63a8a64df5df2',
  },
];
