import type { NextPage } from 'next';
import { Head } from 'Base/components/Head';
import { HomeLink } from 'Base/Article/HomeLink';

const Page: NextPage = () => {
  return (
    <>
      <Head
        title="TK —— Writings"
        description="Learning & Improving with TK —— Writings"
        imageUrl="/logo.jpeg"
      />

      <main id="main">
        <div className="content">
          <HomeLink />
        </div>
      </main>
    </>
  );
};

export default Page;
