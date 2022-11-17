import dynamic from 'next/dynamic';

export const ShareButtons = dynamic(() => import('./ShareButtons'), {
  ssr: false,
});
