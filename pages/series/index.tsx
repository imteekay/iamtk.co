import type { NextPage } from 'next';
import { Head } from 'Base/components/Head';
import { Series } from 'Home/components/Series';

const Page: NextPage = () => {
  return (
    <>
      <Head
        title="TK – Series"
        description="Learning & Improving with TK – Series"
        imageUrl="/logo.jpeg"
      />

      <main id="main">
        <div className="content">
          <Series />
        </div>
      </main>
    </>
  );
};

export default Page;
