/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
  let graph = new Array();
  let visited = new Array();

  function isAcyclic(currNode, par = 0) {
    visited[currNode] = true;

    for (let neighbour of graph[currNode]) {
      //need this to check condition on later node check
      if (visited[neighbour] && neighbour !== par) return true;
      if (!visited[neighbour] && isAcyclic(neighbour, currNode)) {
        return true;
      }
    }
    return false;
  }

  //checking cycle on every node
  for (let [u, v] of edges) {
    if (!graph[u]) graph[u] = [];
    if (!graph[v]) graph[v] = [];

    graph[u].push(v);
    graph[v].push(u);

    //resetting the visited array for another node
    visited.fill(false);
    //checking is cycle is found
    if (isAcyclic(u)) {
      return [u, v];
    }
  }
  return null;
};

module.exports = findRedundantConnection;
