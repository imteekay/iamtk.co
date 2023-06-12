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

      <link rel="canonical" href={canonicalURL} />
      <link rel="icon" href="/favicon.ico" />

      <meta name="robots" content="index,follow" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="javascript,typescript,web_development,devtools,software_engineering,reactjs,nextjs,frontend,backend"
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
