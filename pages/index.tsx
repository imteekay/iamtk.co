import type { NextPage } from 'next';
import Head from 'next/head';
import { SkipLink } from '../Home/components/SkipLink';
import { Title } from '../Home/components/Title';
import { About } from '../Home/components/About';
import { Writings } from '../Home/components/Writings';
import { Series } from '../Home/components/Series';
import { Projects } from '../Home/components/Projects';
import { Footer } from '../Base/components/Footer';

const Home: NextPage = () => {
  return (
    <>
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
      <Footer />
    </>
  );
};

export default Home;
