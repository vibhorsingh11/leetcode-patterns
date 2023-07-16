const minFlips = require("../main/Problem69_MinimumFlipsToMakeAORBEqualoC");

test("should return min flips", () => {
  const a = 2,
    b = 6,
    c = 5;

  expect(minFlips(a, b, c)).toBe(3);
});
