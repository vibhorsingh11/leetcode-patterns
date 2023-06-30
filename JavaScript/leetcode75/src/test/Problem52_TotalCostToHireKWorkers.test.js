const totalCost = require("../main/Problem52_TotalCostToHireKWorkers");

test("should return toatl cost to hire k candidates", () => {
  const costs = [17, 12, 10, 2, 7, 2, 11, 20, 8],
    k = 3,
    candidates = 4;

  expect(totalCost(costs, k, candidates)).toBe(11);
});
