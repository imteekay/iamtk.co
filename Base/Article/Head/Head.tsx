import { Head as BaseHead } from 'Base/components/Head';

type HeadPropTypes = {
  title: string;
  description: string;
  imageUrl: string;
};

export const Head = ({ title, description, imageUrl }: HeadPropTypes) => (
  <>
    <BaseHead title={title} description={description} imageUrl={imageUrl} />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/styles/night-owl.min.css"
    />
  </>
);
