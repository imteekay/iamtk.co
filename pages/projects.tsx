import type { NextPage } from 'next';

import { HomeLink } from 'Base/Article/HomeLink';
import { Head } from 'Base/components/Head';
import { AnimationLayout } from 'Base/components/Layout/AnimationLayout';
import { Navbar } from 'Base/components/Navbar';
import { Projects } from 'Home/components/Projects';

const Page: NextPage = () => (
  <>
    <Head
      title="TK —— Projects"
      description="Learning & Improving with TK —— Projects"
      imageUrl="/logo.jpeg"
    />
    <Navbar />
    <AnimationLayout>
      <main id="main">
        <div className="content">
          <HomeLink />
          <Projects />
        </div>
      </main>
    </AnimationLayout>
  </>
);

export default Page;
