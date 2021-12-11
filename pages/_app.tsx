import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Layout } from 'Base/components/Layout';
import { SearchBar } from 'Base/components/SearchBar';
import { pageview, GA_TRACKING_ID } from 'src/lib/tracking/gtag';

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
      <Layout>
        <SearchBar>
          <Component {...pageProps} />
        </SearchBar>
      </Layout>
    </>
  );
};

export default MyApp;
