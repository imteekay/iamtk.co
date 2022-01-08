import type { NextPage } from 'next';
import { Head } from 'Base/components/Head';
import { Title } from 'Base/components/Title';
import { SkipLink } from 'Home/components/SkipLink';
import { About } from 'Home/components/About';
import { Writings } from 'Home/components/Writings';
import { Series } from 'Home/components/Series';
import { Projects } from 'Home/components/Projects';

const Page: NextPage = () => {
  return (
    <>
      <Head
        title="TK's website about software engineering, web development, and career in tech"
        description="Learning & Improving with TK: a website about software engineering, web development, and career in tech"
        imageUrl="/logo.jpeg"
      />

      <SkipLink />

      <main id="main">
        <div className="content">
          <Title text="TK" />
          <About />
          <Writings />
          <Series />
          <Projects />
        </div>
      </main>
    </>
  );
};

export default Page;
