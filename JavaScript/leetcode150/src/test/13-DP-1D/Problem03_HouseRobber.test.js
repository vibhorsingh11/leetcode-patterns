const rob = require('../../main/13-DP-1D/Problem03_HouseRobber');

test('should return max money after rob', () => {
  const nums = [2, 7, 9, 3, 1];

  expect(rob(nums)).toBe(12);
});
