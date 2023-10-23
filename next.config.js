/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    esmExternals: false,
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/imteekay',
        permanent: false,
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/imtk',
        permanent: false,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/wordsofteekay',
        permanent: false,
      },
      {
        source: '/newsletter',
        destination: 'https://teekay.substack.com',
        permanent: false,
      },
    ];
  },
};
