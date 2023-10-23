import styled from '@emotion/styled';
import type { NextPage } from 'next';

import { Head } from 'Base/components/Head';
import { AnimationLayout } from 'Base/components/Layout/AnimationLayout';
import { Navbar } from 'Base/components/Navbar';
import { Title } from 'Base/components/Title';
import { About } from 'Home/components/About';
import { Experiments } from 'Home/components/Experiments';
import { Projects } from 'Home/components/Projects';
import { Series } from 'Home/components/Series';
import { SkipLink } from 'Home/components/SkipLink';
import { Writings } from 'Home/components/Writings';

const LayoutFade = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background: linear-gradient(180deg, transparent, #0e0e16);
  pointer-events: none;
`;

const Page: NextPage = () => (
  <>
    <Head
      title="TK's website about software engineering, web development, and career in tech"
      description="Learning & Improving with TK: a website about software engineering, web development, and career in tech"
      imageUrl="/logo.jpeg"
    />
    <Navbar />
    <SkipLink />
    <AnimationLayout>
      <main id="main">
        <div className="content">
          <Title text="TK Kinoshita" />
          <About />
          <Writings />
          <Series />
          <Projects />
          <Experiments />
        </div>
        <LayoutFade />
      </main>
    </AnimationLayout>
  </>
);

export default Page;
