const minCostClimbingStairs = require("../main/Problem60_MinCostClimbingStairs");

test("should return min cost", () => {
  const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];

  expect(minCostClimbingStairs(cost)).toBe(6);
});
