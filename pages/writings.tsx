import type { NextPage } from 'next';
import { Head } from 'Base/components/Head';
import { Writings } from 'Home/components/Writings';
import { HomeLink } from 'Base/Article/HomeLink';

const Page: NextPage = () => {
  return (
    <>
      <Head
        title="TK – Writings"
        description="Learning & Improving with TK – Writings"
        imageUrl="/logo.jpeg"
      />

      <main id="main">
        <div className="content">
          <HomeLink />
          <Writings />
        </div>
      </main>
    </>
  );
};

export default Page;
