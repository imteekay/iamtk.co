import Link from 'next/link';

import styled from '@emotion/styled';
import type { NextPage } from 'next';

import { Head } from 'Base/components/Head';
import { AnimationLayout } from 'Base/components/Layout/AnimationLayout';
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

const Header = styled.header`
  padding: 24px 16px;
`;

const Logo = styled(Link)`
  font-weight: 700;
  font-size: 16px;
  -webkit-text-decoration: none;
  text-decoration: none;
  border: 1px solid;
  padding: 8px 10px;
`;

const Page: NextPage = () => (
  <AnimationLayout>
    <Head
      title="TK's website about software engineering, web development, and career in tech"
      description="Learning & Improving with TK: a website about software engineering, web development, and career in tech"
      imageUrl="/logo.jpeg"
    />

    <Header>
      <Logo href="/">TK</Logo>
    </Header>

    <SkipLink />

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
);

export default Page;
