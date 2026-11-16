import Link from 'next/link';

import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { Head } from 'Base/components/Head';
import { Navbar } from 'Base/components/Navbar';
import { topicsBySlug } from 'data/commonplace/topics';
import { getAllResources, getResource, Resource } from 'src/lib/commonplace';

const Page: NextPage<{ resource: Resource }> = ({ resource }) => (
  <>
    <Head
      title={`TK —— Commonplace: ${resource.title}`}
      description={`Notes on ${resource.title}`}
      imageUrl="/logo.jpeg"
    />
    <Navbar />
    <main id="main">
      <div className="content">
        <Link href="/commonplace">← Commonplace Book</Link>
        <h1>{resource.title}</h1>
        <p>
          {resource.author} · {resource.type} · {resource.date}
          {resource.url && (
            <>
              {' · '}
              <a href={resource.url} target="_blank" rel="noopener noreferrer">
                source
              </a>
            </>
          )}
        </p>
        <p>
          {resource.topics.map((slug) => (
            <span key={slug} style={{ marginRight: 12 }}>
              <Link href={`/commonplace/${slug}`}>
                {topicsBySlug[slug].icon} {topicsBySlug[slug].name}
              </Link>
            </span>
          ))}
        </p>
        {resource.notes && (
          <p style={{ whiteSpace: 'pre-wrap' }}>{resource.notes}</p>
        )}
        {resource.ideas.length > 0 && (
          <>
            <h2>Key ideas</h2>
            <ul>
              {resource.ideas.map((idea) => (
                <li key={idea}>{idea}</li>
              ))}
            </ul>
          </>
        )}
        {resource.quotes.map((quote) => (
          <blockquote key={quote}>{quote}</blockquote>
        ))}
      </div>
    </main>
  </>
);

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: getAllResources().map((r) => ({ params: { slug: r.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<{ resource: Resource }> = async ({
  params,
}) => ({ props: { resource: getResource(String(params?.slug))! } });

export default Page;
