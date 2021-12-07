export const GAScript = () => (
  <>
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=186262444-1"
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '186262444-1', {
            page_path: window.location.pathname,
          });
        `,
      }}
    />
  </>
);
