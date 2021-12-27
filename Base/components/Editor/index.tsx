import dynamic from 'next/dynamic';

const LoadableEditor = dynamic(() => import('./Editor'), { ssr: false });

export default LoadableEditor;
