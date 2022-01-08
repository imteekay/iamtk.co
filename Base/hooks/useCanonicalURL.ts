import { useRouter } from 'next/router';

export function useCanonicalURL() {
  const { asPath } = useRouter();
  return asPath.length === 1
    ? process.env.NEXT_PUBLIC_DOMAIN_URL
    : process.env.NEXT_PUBLIC_DOMAIN_URL + asPath;
}
