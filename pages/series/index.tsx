import type { NextPage } from 'next';

import { HomeLink } from 'Base/Article/HomeLink';
import { Head } from 'Base/components/Head';
import { Series } from 'Home/components/Series';

const Page: NextPage = () => (
  <>
    <Head
      title="TK —— Series"
      description="Learning & Improving with TK —— Series"
      imageUrl="/logo.jpeg"
    />

    <main id="main">
      <div className="content">
        <HomeLink />
        <Series header="h1" />
      </div>
    </main>
  </>
);

export default Page;
