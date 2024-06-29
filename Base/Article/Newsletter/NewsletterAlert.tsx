import { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import debounce from 'debounce';

const NewsletterAlertContainer = styled.div`
  position: fixed;
  bottom: 120px;
  right: 130px;
  width: 300px;
  font-size: 12px;
  line-height: 1.5em;
  background-color: #40a578;
  color: white;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  padding: 10px;
  border-radius: 6px;
  user-select: none;

  transform: translateX(500px);
  transition: transform 1.2s;
  transition-timing-function: linear(
    0,
    0.035 2.1%,
    0.281 6.7%,
    0.723 12.9%,
    0.938 16.7%,
    0.977 51%,
    0.974 53.8%,
    0.975 57.1%,
    0.997 69.8%,
    1
  );

  &.animated {
    transform: translateX(0) rotate(-5deg);
    transition-timing-function: linear(
      0,
      0.009,
      0.035 2.1%,
      0.141,
      0.281 6.7%,
      0.723 12.9%,
      0.938 16.7%,
      1.017,
      1.077,
      1.121,
      1.149 24.3%,
      1.159,
      1.163,
      1.161,
      1.154 29.9%,
      1.129 32.8%,
      1.051 39.6%,
      1.017 43.1%,
      0.991,
      0.977 51%,
      0.974 53.8%,
      0.975 57.1%,
      0.997 69.8%,
      1.003 76.9%,
      1.004 83.8%,
      1
    );
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

const NewsletterAlertBox = styled.div`
  display: flex;
  align-items: center;
`;

const ContentHolder = styled.div`
  padding-right: 8px;
`;

const CloseButton = styled.a`
  padding: 6px;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;

export const NewsletterAlert = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const onScroll = debounce(() => {
      const currentPosition = document.documentElement.scrollTop;
      const height = document.body.scrollHeight;
      const percentPageToShow = height * 0.65;
      const percentPageToHide = height * 0.85;

      if (currentPosition > percentPageToHide) {
        setAnimated(false);
      } else if (
        !window.localStorage.getItem('newsletterAlertShown') &&
        currentPosition > percentPageToShow
      ) {
        setAnimated(true);
        window.localStorage.setItem('newsletterAlertShown', 'true');
      }
    });

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const closeAlert = () => {
    setAnimated(false);
  };

  return (
    <NewsletterAlertContainer id="test" className={animated ? 'animated' : ''}>
      <NewsletterAlertBox>
        <ContentHolder>
          Hey! You may like this{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://teekay.substack.com"
            onClick={closeAlert}
          >
            <b>newsletter</b>
          </a>{' '}
          if you&apos;re enjoying this blog. ❤
        </ContentHolder>
        <CloseButton role="button" onClick={closeAlert}>
          ✖
        </CloseButton>
      </NewsletterAlertBox>
    </NewsletterAlertContainer>
  );
};
