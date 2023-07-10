const numTilings = require("../main/Problem62_DominoAndTrominoTiling");

test("should return ways", () => {
  expect(numTilings(3)).toBe(5);
});
