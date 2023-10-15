const jump = require('../main/Problem120_JumpGameII');

test('should return number of jumps', () => {
  const nums = [2, 3, 1, 1, 4];

  expect(jump(nums)).toBe(2);
});
