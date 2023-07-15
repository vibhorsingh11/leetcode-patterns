const countBits = require("../main/Problem67_CountingBits");

test("should return count of bits", () => {
  const expected = [0, 1, 1];
  expect(countBits(2)).toStrictEqual(expected);
});
