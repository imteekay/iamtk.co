import { useRouter } from 'next/router';

export function useCanonicalURL() {
  const router = useRouter();
  return router.asPath.length === 1
    ? process.env.NEXT_PUBLIC_DOMAIN_URL
    : process.env.NEXT_PUBLIC_DOMAIN_URL + router.asPath;
}
