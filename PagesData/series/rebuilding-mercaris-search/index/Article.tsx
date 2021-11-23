import { FC } from 'react';

export const Article: FC = () => (
  <>
    <p>
      I‘m always looking for ways to improve my craft. One of the fun things I
      do is side projects. Things that I find interesting but also challenging.
    </p>
    <p>
      A search experience was something that came to my mind as it has a lot of
      complexity both in the frontend and in the backend sides.
    </p>
    <p>
      I wanted to build this search similarly to{' '}
      <a href="https://www.mercari.com/">
        <em>Mercari‘s Search</em>
      </a>{' '}
      focusing on the product‘s frontend aspect first. So I could think mostly
      about the frontend challenges like state management, performance,
      accessibility, data fetching, testing, and architecture.
    </p>
    <p>
      This post will be a live document where I update with all the upcoming
      posts from this series. First, we‘ll just setup the project. Then the
      first implementation of the home and the main menu‘s draft. Then we‘ll
      dive into the product list and the filter architecture.
    </p>

    <h2>Rebuilding Mercari‘s Search Series</h2>
  </>
);
