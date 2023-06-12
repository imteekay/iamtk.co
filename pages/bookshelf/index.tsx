import type { NextPage } from 'next';

import { HomeLink } from 'Base/Article/HomeLink';
import { Head } from 'Base/components/Head';
import { AnimationLayout } from 'Base/components/Layout/AnimationLayout';
import { Bookshelf } from 'Home/components/Bookshelf/Bookshelf';

const Page: NextPage = () => (
  <AnimationLayout>
    <Head
      title="TK —— Bookshelf"
      description="Learning & Improving with TK —— Bookshelf"
      imageUrl="/bookshelf.jpg"
    />

    <main id="main">
      <div className="content">
        <HomeLink />
        <Bookshelf />
      </div>
    </main>
  </AnimationLayout>
);

export default Page;
