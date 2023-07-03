const successfulPairs = require("../main/Problem54_SuccessfulPairsOfSpellsAndPotions");

test("should return successful producst", () => {
  const spells = [5, 1, 3],
    potions = [1, 2, 3, 4, 5],
    success = 7;
  const product = [4, 0, 3];

  expect(successfulPairs(spells, potions, success)).toStrictEqual(product);
});
