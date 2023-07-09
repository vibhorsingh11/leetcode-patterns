const rob = require("../main/Problem61_HouseRobber");

test("should return max money", () => {
  const nums = [2, 7, 9, 3, 1];

  expect(rob(nums)).toBe(12);
});
