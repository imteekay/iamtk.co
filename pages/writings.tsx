import type { NextPage } from 'next';

import { HomeLink } from 'Base/Article/HomeLink';
import { Head } from 'Base/components/Head';
import { AnimationLayout } from 'Base/components/Layout/AnimationLayout';
import { Navbar } from 'Base/components/Navbar';
import { Writings } from 'Home/components/Writings';

const Page: NextPage = () => (
  <>
    <Head
      title="TK —— Writings"
      description="Learning & Improving with TK —— Writings"
      imageUrl="/logo.jpeg"
    />
    <Navbar />
    <AnimationLayout>
      <main id="main">
        <div className="content">
          <HomeLink />
          <Writings header="h1" />
        </div>
      </main>
    </AnimationLayout>
  </>
);

export default Page;
