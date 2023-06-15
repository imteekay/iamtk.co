import Image from 'next/image';
import Link from 'next/link';

import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { NextPage } from 'next';

import { HomeLink } from 'Base/Article/HomeLink';
import { SubstackEmbed } from 'Base/Community/SubstackEmbed';
import { Head } from 'Base/components/Head';
import { AnimationLayout } from 'Base/components/Layout/AnimationLayout';
import { Navbar } from 'Base/components/Navbar';

const Page: NextPage = () => (
  <>
    <Head
      title="TK —— Support"
      description="Learning & Improving with TK —— Support"
      imageUrl="/logo.jpeg"
    />
    <Navbar />
    <AnimationLayout>
      <main id="main">
        <div className="content">
          <HomeLink />
          <h1>Support.</h1>

          <Image
            src="/support.jpg"
            width="640"
            height="426"
            alt="a picture of the dark universe"
          />

          <p>
            This website is my digital notebook, where I sketch and document
            every experiment, things I learned, and my experience throughout my
            journey. I also consider it my creative space, a place I can share
            anything I‘m doing and make it free and open for everybody.
          </p>
          <p>
            I decided to experiment with a{' '}
            <Link href="/series/website-changelog/building-my-legacy-through-accessible-open-and-free-content">
              new content creation process
            </Link>
            . Every post will continue to be open and free. But I‘ll send early
            access to{' '}
            <Link href="https://teekay.substack.com" target="_blank">
              paid Substack subscribers
            </Link>
            .
          </p>
          <p>
            All the donations I get are re-invested back into my current and
            future projects. I want to scale the content creation while keeping,
            or improving, the high-quality work.
          </p>
          <p>You can also</p>
          <ul>
            <li>
              Follow me on{' '}
              <a
                target="_blank"
                href="https://twitter.com/wordsofteekay"
                title="twitter"
                rel="noreferrer"
              >
                Twitter
              </a>{' '}
              <FontAwesomeIcon icon={faTwitter} />
            </li>
            <li>
              Follow me on{' '}
              <a
                target="_blank"
                href="https://github.com/imteekay"
                title="github"
                rel="noreferrer"
              >
                Github
              </a>{' '}
              <FontAwesomeIcon icon={faGithub} />
            </li>
            <li>Share my content</li>
          </ul>

          <p style={{ marginBottom: '0', marginTop: '30px' }}>
            Or subscribe to my free or paid newsletter:
          </p>
          <SubstackEmbed />

          <p style={{ marginTop: '0' }}>
            Thank you,<br></br>
            You have my eternal gratitude to make this a reality.
            <br></br>
            <strong>TK</strong>.
          </p>
        </div>
      </main>
    </AnimationLayout>
  </>
);

export default Page;
