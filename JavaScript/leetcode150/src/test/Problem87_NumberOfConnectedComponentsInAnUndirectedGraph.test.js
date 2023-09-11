const countComponents = require('../main/Problem87_NumberOfConnectedComponentsInAnUndirectedGraph');

test('should return the count of connected components', () => {
  const n = 6,
    edges = [
      [0, 1],
      [1, 2],
      [2, 3],
      [4, 5],
    ];

  expect(countComponents(n, edges)).toBe(2);
});
