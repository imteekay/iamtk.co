import type { NextPage } from 'next';
import { Head } from 'Base/components/Head';

const Page: NextPage = () => {
  return (
    <>
      <Head
        title="TK – Microblog"
        description="Learning & Improving with TK – Microblog"
        imageUrl="/logo.jpeg"
      />

      <main id="main">
        <div className="content"></div>
      </main>
    </>
  );
};

export default Page;
