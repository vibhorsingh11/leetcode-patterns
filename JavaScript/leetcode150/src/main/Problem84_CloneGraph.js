// Definition for a Node.
class Node {
  constructor(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (!node) return null;

  const visited = new Map();
  const queue = [node];
  visited.set(node, new Node(node.val));

  while (queue.length) {
    const curr = queue.shift();

    if (Array.isArray(curr.neighbors)) {
      for (let neighbor of Array.from(curr.neighbors)) {
        if (!visited.has(neighbor)) {
          visited.set(neighbor, new Node(neighbor.val));
          queue.push(neighbor);
        }
        visited.get(curr).neighbors.push(visited.get(neighbor));
      }
    }
  }

  return visited.get(node);
};

module.exports = cloneGraph;
