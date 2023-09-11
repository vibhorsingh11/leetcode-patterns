function countComponents(n, edges) {
  // write your code here
  let graph = new Array(n).fill(null).map(() => []);
  let visited = new Array(n).fill(false);
  let count = 0;

  for (let [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  function dfs(u) {
    visited[u] = true;

    for (let neighbour of graph[u]) {
      if (!visited[neighbour]) {
        dfs(neighbour);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      count++;
    }
  }
  return count;
}

module.exports = countComponents;
