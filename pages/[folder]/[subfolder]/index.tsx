import type { NextPage } from 'next';
import { Head } from 'Base/components/Head';
import { Title } from 'Base/components/Title';
import { SkipLink } from 'Home/components/SkipLink';
import { About } from 'Home/components/About';
import { Writings } from 'Home/components/Writings';
import { Series } from 'Home/components/Series';
import { Projects } from 'Home/components/Projects';
import { useRouter } from 'next/dist/client/router';

const Page: NextPage = () => {
  const router = useRouter();
  console.log('router.query', router.query);

  return (
    <>
      <Head
        title="TK"
        description="Learning & Improving with TK"
        imageUrl="https://raw.githubusercontent.com/leandrotk/tk/master/images/logo.jpg"
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
