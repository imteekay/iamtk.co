import '../styles/globals.css';
import '../styles/night-owl.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

import type { AppProps, NextWebVitalsMetric } from 'next/app';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
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
  if (typeof gtag === 'undefined') return;

  window.gtag('event', name, {
    event_category:
      label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    value: Math.round(name === 'CLS' ? value * 1000 : value),
    event_label: id,
    non_interaction: true,
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
      <Script id="custom-substack-widget">
        {`window.CustomSubstackWidget = {
          substackUrl: "teekay.substack.com",
          placeholder: "example@gmail.com",
          buttonText: "Subscribe",
          theme: "custom",
          colors: {
            primary: "#FFFFFF",
            input: "#000000",
            email: "#FFFFFF",
            text: "#000000",
          }
        };
        `}
      </Script>
      <Script src="https://substackapi.com/widget.js" async></Script>
      <SearchBar>
        <Layout>
          <AnimatePresence mode="wait">
            <Component {...pageProps} />
          </AnimatePresence>
        </Layout>
      </SearchBar>
    </>
  );
};

export default MyApp;
