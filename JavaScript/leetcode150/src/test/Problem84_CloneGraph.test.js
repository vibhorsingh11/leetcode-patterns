const cloneGraph = require('../main/Problem84_CloneGraph');

class Node {
  constructor(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

test('should return cloned graph', () => {
  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);
  const node4 = new Node(4);

  // Set the neighbors
  node1.neighbors = [node2, node4];
  node2.neighbors = [node1, node3];
  node3.neighbors = [node2, node4];
  node4.neighbors = [node1, node3];

  // Clone the graph
  const clonedGraph = cloneGraph(node1);

  // Check if the cloned graph has the same structure
  expect(clonedGraph.val).toBe(1);
  expect(clonedGraph.neighbors).toHaveLength(2);
  expect(clonedGraph.neighbors[0].val).toBe(2);
  expect(clonedGraph.neighbors[1].val).toBe(4);
  expect(clonedGraph.neighbors[0].neighbors[0].val).toBe(1);
  expect(clonedGraph.neighbors[0].neighbors[1].val).toBe(3);
});
