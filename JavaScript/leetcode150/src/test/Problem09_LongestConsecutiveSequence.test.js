const longestConsecutive = require('../main/Problem09_LongestConsecutiveSequence');

test('should return max steak', () => {
  const nums = [100, 4, 200, 1, 3, 2];

  expect(longestConsecutive(nums)).toBe(4);
});
