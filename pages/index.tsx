import type { NextPage } from 'next';
import Head from 'next/head';
import { Layout } from '../Base/components/Layout';
import { SkipLink } from '../Home/components/SkipLink';
import { Title } from '../Home/components/Title';
import { About } from '../Home/components/About';
import { Writings } from '../Home/components/Writings';
import { Series } from '../Home/components/Series';
import { Projects } from '../Home/components/Projects';

const Home: NextPage = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default Home;
