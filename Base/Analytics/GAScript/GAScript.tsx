import Script from 'next/script';

export const GAScript = () => (
  <>
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=186262444-1"
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}

        gtag('js', new Date());
        gtag('config', '186262444-1');
      `}
    </Script>
  </>
);
