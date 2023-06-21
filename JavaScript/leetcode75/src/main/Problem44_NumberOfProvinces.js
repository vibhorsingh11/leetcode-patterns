/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const n = isConnected.length;
  let components = 0;
  let visited = new Array(n);
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      components++;
      dfs(i, isConnected, visited);
    }
  }
  return components;
};

let dfs = function (currNode, isConnected, visited) {
  visited[currNode] = true;
  for (let i = 0; i < isConnected.length; i++) {
    if (isConnected[currNode][i] === 1 && !visited[i]) {
      dfs(i, isConnected, visited);
    }
  }
};

module.exports = findCircleNum;
