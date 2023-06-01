const removeStars = require("../main/Problem24_RemovingStarsFromAString");

test("should return string without stars", () => {
  const str = "leet**cod*e";
  expect(removeStars(str)).toBe("lecoe");
});
