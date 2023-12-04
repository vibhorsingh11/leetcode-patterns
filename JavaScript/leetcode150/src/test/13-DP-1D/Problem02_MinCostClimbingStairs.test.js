const minCostClimbingStairs = require('../../main/13-DP-1D/Problem02_MinCostClimbingStairs');

test('should return min cost', () => {
  const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];

  expect(minCostClimbingStairs(cost)).toBe(6);
});
