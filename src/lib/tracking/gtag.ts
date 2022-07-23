export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID as string;

type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value: number;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL): void => {
  window.gtag &&
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GTagEvent): void => {
  window.gtag &&
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    });
};
