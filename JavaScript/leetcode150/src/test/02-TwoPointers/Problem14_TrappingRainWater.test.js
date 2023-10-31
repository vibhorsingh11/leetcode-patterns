const trap = require('../../main/02-TwoPointers/Problem14_TrappingRainWater');

test('should return max trap water', () => {
  const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

  expect(trap(height)).toBe(6);
});
