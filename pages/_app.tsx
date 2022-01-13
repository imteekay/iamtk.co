import '../styles/globals.css';
import '../styles/night-owl.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

import type { AppProps, NextWebVitalsMetric } from 'next/app';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { config } from '@fortawesome/fontawesome-svg-core';
import { Layout } from 'Base/components/Layout';
import { SearchBar } from 'Base/components/SearchBar';
import { pageview, GA_TRACKING_ID } from 'src/lib/tracking/gtag';

config.autoAddCss = false;

export function reportWebVitals({
  id,
  name,
  label,
  value,
}: NextWebVitalsMetric) {
  window.gtag('event', name, {
    event_category:
      label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    event_label: id, // id unique to current page load
    non_interaction: true, // avoids affecting bounce rate.
  });
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeComplete', pageview);
    return () => {
      router.events.off('routeChangeComplete', pageview);
    };
  }, [router.events]);

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}');
        `}
      </Script>
      <SearchBar>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SearchBar>
    </>
  );
};

export default MyApp;
