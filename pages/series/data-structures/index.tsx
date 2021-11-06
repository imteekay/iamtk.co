import type { NextPage } from 'next';
import { FC } from 'react';
import Highlight from 'react-highlight';
import { Head } from '../../../Base/components/Head';
import { SubstackEmbed } from '../../../Base/Community/SubstackEmbed';
import { Title } from '../../../Base/Article/Title';
import { Meta } from '../../../Base/Article/Meta';
import { HomeLink } from '../../../Base/Article/HomeLink';
import { CoverImage } from '../../../Base/Article/CoverImage';
import { PostsList } from '../../../Base/Article/PostsList';
import { SocialLinks } from '../../../Base/Article/SocialLinks';
import { Tags } from '../../../Base/Article/Tags';
import { Sponsorship } from '../../../Base/Article/Sponsorship/Sponsorship';

export const tags = [
  {
    href: '../../tags/algorithms_and_data_structures.html',
    name: 'algorithms_and_data_structures',
  },
  {
    href: '../../tags/python.html',
    name: 'python',
  },
];

const postsList = [
  {
    datetime: '2020-01-06',
    link: '/2020/01/stack-data-structure',
    title: 'Stack Data Structure',
  },
  {
    datetime: '2020-02-02',
    link: '/2020/01/queue-data-structure',
    title: 'Queue Data Structure',
  },
  {
    datetime: '2020-01-13',
    link: '/2020/01/linked-list',
    title: 'Linked List Data Structure',
  },
  {
    datetime: '2020-02-10',
    link: '/2020/02/tree-data-structure',
    title: 'Tree Data Structure',
  },
];

export const Body: FC = () => (
  <div className="content">
    <HomeLink />
    <article
      className="post"
      itemScope
      itemType="http://schema.org/BlogPosting"
    >
      <header>
        <Title text="Data Structures Series" />
        <Meta date="2020-06-14" tags={tags} />
      </header>

      <CoverImage
        src="/series/data-structures/intro.jpg"
        width="592"
        height="444"
        alt=""
        authorHref="https://unsplash.com/@fabioha"
        authorName="fabio"
      />

      <hr />

      <p>
        This is part of my series on <code>Data Structures</code>, where I
        document posts about algorithms problems I solved.
      </p>

      <p>
        This is live document and will be updated everytime I solve new
        problems.
      </p>

      <h2>Data Structures Series</h2>

      <PostsList postsList={postsList} />
      <SocialLinks />
    </article>

    <SubstackEmbed />
    <Tags tags={tags} />
    <Sponsorship />
  </div>
);

const DataStructures: NextPage = () => (
  <>
    <Head
      title="Data Structures Series"
      description="Solving algorithms problems with TK"
      imageUrl="https://raw.githubusercontent.com/leandrotk/tk/master/series/data-structures/assets/intro.jpg"
    />
    <Body />
  </>
);

export default DataStructures;
