import { remark } from 'remark';
import type { Root } from 'mdast';
import { visit } from 'unist-util-visit';
import { Graph } from './Graph';
import { PostMarkdown } from './PostMarkdown';

const excludedPages = [
  '',
  '/',
  '/writings',
  '/support',
  '/rss.xml',
  undefined,
  null
];

function isInternalLink(url: string) {
  return (
    !url.startsWith('https') &&
    !url.startsWith('http') &&
    !url.startsWith('www') &&
    !excludedPages.includes(url)
  );
}

function buildLink(postMarkdown: PostMarkdown, graph: Graph) {
  graph.addNode(postMarkdown);

  remark()
    .use(() => (mdast: Root) => {
      visit(mdast, 'link', (node) => {
        if (isInternalLink(node.url)) {
          graph.addEdge(postMarkdown.url, node.url);
        }
      });
    })
    .process(postMarkdown.content);
}

export function createGraph(postMarkdowns: PostMarkdown[]) {
  const graph = new Graph(postMarkdowns);

  for (let postMarkdown of postMarkdowns) {
    buildLink(postMarkdown, graph);
  }

  return graph;
}
