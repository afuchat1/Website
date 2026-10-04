// Manually maintained snapshot from https://uk.trustpilot.com/review/afuchat.com.
// Update these entries from the public profile instead of loading a third-party widget.
export const TRUSTPILOT_REVIEW_SNAPSHOT = {
  rating: 4.0,
  totalReviews: 5,
  asOf: '4 October 2026',
};

export type TrustpilotReview = {
  id: string;
  reviewerName: string;
  date: string;
  dateTime: string;
  rating?: 1 | 2 | 3 | 4 | 5;
  title?: string;
  quote?: string;
  sourceUrl: string;
  sourceLabel?: string;
};

export const TRUSTPILOT_REVIEWS: TrustpilotReview[] = [
  {
    id: '6a92d13ce328f0a6b9650d30',
    reviewerName: 'Fikadu Alemu Tatty',
    date: '29 August 2026',
    dateTime: '2026-08-29',
    rating: 5,
    title: 'Great platform',
    sourceUrl: 'https://uk.trustpilot.com/reviews/6a92d13ce328f0a6b9650d30',
  },
  {
    id: '6a888e1d7d8d759e9df3f790',
    reviewerName: 'Zakooza Adrian',
    date: '21 August 2026',
    dateTime: '2026-08-21',
    rating: 5,
    title: 'most times a few application can meet…',
    quote: 'most times a few application can meet the joint experience for a user but afuchat is really a nice application and offers some nice experience, i like the user interface, its fast and easier to navigate in short terms it is user friendly, it works well on all my mobile applictaion',
    sourceUrl: 'https://uk.trustpilot.com/reviews/6a888e1d7d8d759e9df3f790',
  },
  {
    id: '6a3133f58bf63a8a64df5df2',
    reviewerName: 'Jjunju Acram',
    date: '16 June 2026',
    dateTime: '2026-06-16',
    rating: 4,
    title: "This app is efficient since it's caters…",
    quote: "This app is efficient since it's caters for all people. It's good and I recommend you all to use this app.",
    sourceUrl: 'https://uk.trustpilot.com/reviews/6a3133f58bf63a8a64df5df2',
  },
  {
    // Public-site copy for a second Zakooza review; its individual Trustpilot URL and rating aren't exposed.
    id: 'zakooza-adrian-2026-06-01',
    reviewerName: 'Zakooza Adrian',
    date: '1 June 2026',
    dateTime: '2026-06-01',
    quote: 'Its really an amazing application and it has almost all the features someone would need it had everything so afuchat is the way to go',
    sourceUrl: 'https://uk.trustpilot.com/review/afuchat.com',
    sourceLabel: 'View Trustpilot profile',
  },
  {
    id: '6a00b1f880bdf16257a3b684',
    reviewerName: 'John Bulungu',
    date: '10 May 2026',
    dateTime: '2026-05-10',
    rating: 5,
    title: 'This is the most useful app I have ever…',
    quote: 'This is the most useful app I have ever used',
    sourceUrl: 'https://uk.trustpilot.com/reviews/6a00b1f880bdf16257a3b684',
  },
];