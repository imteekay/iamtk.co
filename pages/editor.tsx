import type { NextPage } from 'next';
import { Head } from 'Base/components/Head';
import { Editor } from 'Base/components/Editor';

const Page: NextPage = () => {
  return (
    <>
      <Head
        title="TK – Projects"
        description="Learning & Improving with TK – Projects"
        imageUrl="/logo.jpeg"
      />

      <main id="main">
        <div className="content">
          <Editor />
        </div>
      </main>
    </>
  );
};

export default Page;
