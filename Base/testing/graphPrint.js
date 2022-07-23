export function graphPrint(graph) {
  graph.nodes.forEach((node) => {
    console.log('node', node.id + ' ' + node.text);
    graph.edges.forEach((edge) => {
      if (edge.source === node.id.toString()) {
        console.log(
          '--> ',
          graph.nodes[Number(edge.target)].id +
            ' ' +
            graph.nodes[Number(edge.target)].text,
        );
      } else if (edge.target === node.id.toString()) {
        console.log(
          '--> ',
          graph.nodes[Number(edge.source)].id +
            ' ' +
            graph.nodes[Number(edge.source)].text,
        );
      }
    });
  });
}
