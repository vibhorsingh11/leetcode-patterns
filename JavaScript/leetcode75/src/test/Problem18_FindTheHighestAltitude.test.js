const largestAltitude = require("../main/Problem18_FindTheHighestAltitude");

test("should return the largest altitude", () => {
  let gain = [-4, -3, -2, -1, 4, 3, 2];
  expect(largestAltitude(gain)).toBe(0);
});
