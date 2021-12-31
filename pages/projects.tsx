import type { NextPage } from 'next';
import { Head } from 'Base/components/Head';
import { Projects } from 'Home/components/Projects';
import { HomeLink } from 'Base/Article/HomeLink';

const Page: NextPage = () => {
  return (
    <>
      <Head
        title="TK —— Projects"
        description="Learning & Improving with TK —— Projects"
        imageUrl="/logo.jpeg"
      />

      <main id="main">
        <div className="content">
          <HomeLink />
          <Projects />
        </div>
      </main>
    </>
  );
};

export default Page;
