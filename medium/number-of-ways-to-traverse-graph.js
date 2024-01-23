function numberOfWaysToTraverseGraph(width, height) {
  const graph = Array(height)
    .fill(null)
    .map(() => Array(width).fill(null));

  // add column numbers
  for (let i = 0; i < graph[0].length; i++) {
    graph[0][i] = 1;
  }

  // add row numbers
  for (let i = 0; i < graph.length; i++) {
    graph[i][0] = 1;
  }

  for (let i = 1; i < height; i++) {
    for (let j = 1; j < width; j++) {
      if (graph[i][j] === null) {
        graph[i][j] = graph[i - 1][j] + graph[i][j - 1];
      }
    }
  }

  return graph[height - 1][width - 1];
}

console.log("RESULT: ", numberOfWaysToTraverseGraph(4, 3));
