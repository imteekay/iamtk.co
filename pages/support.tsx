import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Head } from 'Base/components/Head';
import { SubstackEmbed } from 'Base/Community/SubstackEmbed';
import { Sponsorship } from 'Base/Article/Sponsorship/Sponsorship';
import { HomeLink } from 'Base/Article/HomeLink';

const Page: NextPage = () => {
  return (
    <>
      <Head
        title="TK —— Support"
        description="Learning & Improving with TK —— Support"
        imageUrl="/logo.jpeg"
      />

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
            <Link href="https://www.patreon.com/iamteekay">
              <a target="_blank">patrons</a>
            </Link>{' '}
            and{' '}
            <Link href="https://teekay.substack.com">
              <a target="_blank">paid Substack subscribers</a>
            </Link>
            .
          </p>
          <p>
            All the donations I get are re-invested back into my current and
            future projects. I want to scale the content creation while keeping,
            or improving, the high-quality work.
          </p>
          <p>Want to help?</p>
          <Sponsorship />

          <br></br>

          <p>You can also</p>
          <ul>
            <li>
              Follow me on{' '}
              <a
                target="_blank"
                href="https://twitter.com/leandrotk_"
                title="twitter"
                rel="noreferrer"
              >
                Twitter <span className="fab fa-twitter" />
              </a>{' '}
            </li>
            <li>
              Follow me on{' '}
              <a
                target="_blank"
                href="https://github.com/leandrotk"
                title="github"
                rel="noreferrer"
              >
                Github <span className="fab fa-github" />
              </a>
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
    </>
  );
};

export default Page;