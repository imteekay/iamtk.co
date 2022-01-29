import { remark } from 'remark';
import type { Root } from 'mdast';
import { visit } from 'unist-util-visit';
import { Graph } from './Graph';
import { PostMarkdown } from './PostMarkdown';

type IsAbleToAddEdge = (url: string) => boolean;

function buildLink(
  postMarkdown: PostMarkdown,
  graph: Graph,
  isAbleToAddEdge: IsAbleToAddEdge
) {
  graph.addNode(postMarkdown);

  remark()
    .use(() => (mdast: Root) => {
      visit(mdast, 'link', (node) => {
        if (isAbleToAddEdge(node.url)) {
          graph.addEdge(postMarkdown.url, node.url);
        }
      });
    })
    .process(postMarkdown.content);
}

export function createGraph(
  postMarkdowns: PostMarkdown[],
  isAbleToAddEdge: IsAbleToAddEdge
) {
  const graph = new Graph(postMarkdowns);

  for (let postMarkdown of postMarkdowns) {
    buildLink(postMarkdown, graph, isAbleToAddEdge);
  }

  return graph;
}
