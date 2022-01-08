import HeadNext from 'next/head';
import { useCanonicalURL } from 'Base/hooks/useCanonicalURL';

type HeadPropTypes = {
  title: string;
  description: string;
  imageUrl: string;
};

export const Head = ({ title, description, imageUrl }: HeadPropTypes) => {
  const canonicalURL = useCanonicalURL();

  return (
    <HeadNext>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=5"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
        integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
        crossOrigin="anonymous"
      />

      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/styles/monokai.min.css"
      />

      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/styles/night-owl.min.css"
      />

      <link rel="canonical" href={canonicalURL} />

      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="javascript,typescript,web_development,devtools"
      />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="en" />
      <meta property="og:image" content={`https://iamtk.co${imageUrl}`} />
      <meta property="og:updated_time" content="2020-06-21T00:00:00.000Z" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://iamtk.co${imageUrl}`} />
    </HeadNext>
  );
};
