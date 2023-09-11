function validTree(n, edges) {
  // write your code here
  let graph = new Array(n).fill(null).map(() => []);
  let visited = new Array(n).fill(false);
  let count = 0;

  //Building tree
  for (let [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  function isAcyclic(u, v = 0) {
    visited[u] = true;
    for (let neighbour of graph[u]) {
        //if neighbour is visited but its not parent of curr node
      if (visited[neighbour] && neighbour !== v) return true;
      if (!visited[neighbour] && isAcyclic(neighbour, u)) {
        return true;
      }
    }
    return false;
  }

  //checking is tree is connected. If yes, then check for cycle
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      count++;
      if (isAcyclic(i)) {
        return false;
      }
    }
  }
  // if there are more than 2 connected component then its not a tree
  return count === 1;
}

module.exports = validTree;
