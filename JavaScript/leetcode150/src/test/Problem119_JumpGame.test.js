const canJump = require('../main/Problem119_JumpGame');

test('should return true', () => {
  const nums = [2, 3, 1, 1, 4];

  expect(canJump(nums)).toBeTruthy();
});
