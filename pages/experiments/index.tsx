import type { NextPage } from 'next';
import { Head } from 'Base/components/Head';
import { HomeLink } from 'Base/Article/HomeLink';
import { Experiments } from 'Home/components/Experiments/Experiments';

const Page: NextPage = () => (
  <>
    <Head
      title="TK —— Projects"
      description="Learning & Improving with TK —— Projects"
      imageUrl="/logo.jpeg"
    />

    <main id="main">
      <div className="content">
        <HomeLink />
        <Experiments />
      </div>
    </main>
  </>
);

export default Page;
