/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
  const adjListOut = new Array(n).fill(0).map(() => new Array());
  const adjListIn = new Array(n).fill(0).map(() => new Array());

  let count = 0,
    seenNodes = {};

  for (let c of connections) {
    adjListOut[c[0]].push(c[1]);
    adjListIn[c[1]].push(c[0]);
  }

  const dfs = (node) => {
    let leavingNode = adjListOut[node];
    let intoNode = adjListIn[node];
    seenNodes[node] = true;

    for (let i = 0; i < leavingNode.length; i++) {
      if (!seenNodes[leavingNode[i]]) {
        count++;
        dfs(leavingNode[i]);
      }
    }

    for (let i = 0; i < intoNode.length; i++) {
      if (!seenNodes[intoNode[i]]) {
        dfs(intoNode[i]);
      }
    }
  };

  dfs(0);

  return count;
};

module.exports = minReorder;
