import type { NextPage } from 'next';
import { Head } from 'Base/components/Head';
import { Series } from 'Home/components/Series';
import { HomeLink } from 'Base/Article/HomeLink';

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
        <Series />
      </div>
    </main>
  </>
);

export default Page;
