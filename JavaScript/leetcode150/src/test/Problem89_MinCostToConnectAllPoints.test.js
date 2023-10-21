const minCostConnectPoints = require('../main/Problem89_MinCostToConnectAllPoints');

test('should return min cost', () => {
  const points = [
    [0, 0],
    [2, 2],
    [3, 10],
    [5, 2],
    [7, 0],
  ];

  expect(minCostConnectPoints(points)).toBe(20);
});
