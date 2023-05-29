const uniqueOccurrences = require("../main/Problem21_UniqueNumberOfOccurrences");

test("should return unique occurrences", () => {
  const arr = [1, 2, 2, 1, 1, 3];
  expect(uniqueOccurrences(arr)).toBe(true);
});
