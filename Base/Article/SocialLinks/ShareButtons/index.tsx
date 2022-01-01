import dynamic from 'next/dynamic';

export default dynamic(() => import('./ShareButtons'), { ssr: false });
