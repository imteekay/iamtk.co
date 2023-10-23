import { FC } from 'react';

import styled from '@emotion/styled';
import {
  faTwitter,
  faGithub,
  faGoodreads,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faStickyNote, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Divider } from 'Base/components/Divider';

const Wrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const Link = styled.a`
  display: inline-block;
  height: 19.98px;
  width: 19.98px;
`;

const Socials = () => (
  <Wrapper>
    <Link
      className="icon"
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/imteekay"
      title="github"
    >
      <FontAwesomeIcon icon={faGithub} size="lg" />
    </Link>

    <Link
      className="icon"
      target="_blank"
      rel="noopener noreferrer"
      href="https://twitter.com/wordsofteekay"
      title="twitter"
    >
      <FontAwesomeIcon icon={faTwitter} size="lg" />
    </Link>

    <Link
      className="icon"
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.goodreads.com/iamteekay"
      title="goodreads"
    >
      <FontAwesomeIcon icon={faGoodreads} size="lg" />
    </Link>

    <Link
      className="icon"
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.linkedin.com/in/imtk"
      title="linkedin"
    >
      <FontAwesomeIcon icon={faLinkedin} size="lg" />
    </Link>

    <Link
      className="icon"
      target="_blank"
      rel="noopener noreferrer"
      href="./cv.pdf"
      title="cv"
    >
      <FontAwesomeIcon icon={faStickyNote} size="lg" />
    </Link>

    <Link
      className="icon"
      target="_blank"
      rel="noopener noreferrer"
      href="https://teekay.substack.com"
      title="substack"
    >
      <FontAwesomeIcon icon={faEnvelope} size="lg" />
    </Link>
  </Wrapper>
);

const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Topics = styled.p`
  color: #c1c1c1;
`;

export const About: FC = () => (
  <AboutSection id="about">
    <div>
      <p className="no-margin-top">
        🇯🇵🇧🇷 . software engineer . writer . researcher
      </p>
      <Topics className="no-margin">
        programming language theory . compilers
        <br />
        frontend architecture . infrastructure
      </Topics>
    </div>
    <Socials />
    <Divider />
  </AboutSection>
);
