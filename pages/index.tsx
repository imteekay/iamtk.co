import type { NextPage } from 'next';
import { Head } from 'Base/components/Head';
import { Title } from 'Base/components/Title';
import { SkipLink } from 'Home/components/SkipLink';
import { About } from 'Home/components/About';
import { Writings } from 'Home/components/Writings';
import { Series } from 'Home/components/Series';
import { Projects } from 'Home/components/Projects';
import { Experiments } from 'Home/components/Experiments';
import styled from '@emotion/styled';
import { AnimationLayout } from 'Base/components/Layout/AnimationLayout';

const LayoutFade = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background: linear-gradient(180deg, transparent, #0e0e16);
  pointer-events: none;
`;

const SubstackForm = () => <div id="custom-substack-embed"></div>;

const Page: NextPage = () => (
  <AnimationLayout>
    <Head
      title="TK's website about software engineering, web development, and career in tech"
      description="Learning & Improving with TK: a website about software engineering, web development, and career in tech"
      imageUrl="/logo.jpeg"
    />

    <SkipLink />

    <main id="main">
      <div className="content">
        <Title text="TK" />
        <SubstackForm />
        <About />
        <Writings />
        <Series />
        <Projects />
        <Experiments />
      </div>
      <LayoutFade />
    </main>
  </AnimationLayout>
);

export default Page;
