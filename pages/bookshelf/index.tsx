import type { NextPage } from 'next';

import { HomeLink } from 'Base/Article/HomeLink';
import { Head } from 'Base/components/Head';
import { AnimationLayout } from 'Base/components/Layout/AnimationLayout';
import { Navbar } from 'Base/components/Navbar';
import { Bookshelf } from 'Home/components/Bookshelf/Bookshelf';

const Page: NextPage = () => (
  <>
    <Head
      title="TK —— Bookshelf"
      description="Learning & Improving with TK —— Bookshelf"
      imageUrl="/bookshelf.jpg"
    />
    <Navbar />
    <AnimationLayout>
      <main id="main">
        <div className="content">
          <HomeLink />
          <Bookshelf />
        </div>
      </main>
    </AnimationLayout>
  </>
);

export default Page;
