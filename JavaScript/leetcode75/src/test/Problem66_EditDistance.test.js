const minDistance = require("../main/Problem66_EditDistance");

test("should return min distance to change the string", () => {
  const word1 = "horse",
    word2 = "ros";

  expect(minDistance(word1, word2)).toBe(3);
});
