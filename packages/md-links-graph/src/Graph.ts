import { PostMarkdown } from './PostMarkdown';

type Url = string;

type Node = {
  id: number;
  text: string;
  url: Url;
};

type Edge = {
  source: string;
  target: string;
};

type UrlToIDMap = {
  [key: Url]: string;
};

export class Graph {
  private _nodes: Node[];
  private _edges: Edge[];
  private urlToIDMap: UrlToIDMap;

  constructor(postMarkdowns: PostMarkdown[]) {
    this._nodes = [];
    this._edges = [];
    this.urlToIDMap = this.buildUrlToID(postMarkdowns);
  }

  get nodes() {
    return this._nodes;
  }

  get edges() {
    return this._edges;
  }

  addNode({ url, title }: PostMarkdown) {
    this._nodes.push({
      url,
      text: title,
      id: this._nodes.length
    });
  }

  addEdge(source: Url, target: Url) {
    this._edges.push({
      source: this.urlToIDMap[source],
      target: this.urlToIDMap[target]
    });
  }

  private buildUrlToID(postMarkdowns: PostMarkdown[]) {
    return postMarkdowns.reduce(
      (urlToIDMap, { url }, index: number) => ({
        ...urlToIDMap,
        [url]: index.toString()
      }),
      {}
    );
  }
}
