import type { NextPage } from 'next';

import { HomeLink } from 'Base/Article/HomeLink';
import { Head } from 'Base/components/Head';
import { AnimationLayout } from 'Base/components/Layout/AnimationLayout';
import { List } from 'Base/components/List';
import { Navbar } from 'Base/components/Navbar';

const notes = [
  {
    link: '/notes/starting-a-dedicated-web-performance-team',
    title: 'Starting a Dedicated Web Performance Team',
    description: 'Notes on the Web Performance Team by Sarah Dapul-Weberman',
    target: '',
    rel: '',
  },
];

const Page: NextPage = () => (
  <>
    <Head
      title="TK —— Notes"
      description="Learning & Improving with TK —— Notes"
      imageUrl="/logo.jpeg"
    />
    <Navbar />
    <AnimationLayout>
      <main id="main">
        <div className="content">
          <HomeLink />
          <List
            sectionId="notes"
            titleLink="/notes"
            titleText="notes"
            list={notes}
            openNewTab={false}
            header="h1"
          />
        </div>
      </main>
    </AnimationLayout>
  </>
);

export default Page;
