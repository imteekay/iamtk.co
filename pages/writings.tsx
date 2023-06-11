import type { NextPage } from 'next';

import { HomeLink } from 'Base/Article/HomeLink';
import { Head } from 'Base/components/Head';
import { Writings } from 'Home/components/Writings';

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
          <Writings header="h1" />
        </div>
      </main>
    </>
  );
};

export default Page;
