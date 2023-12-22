const maxProfit = require('../../main/14-DP-2D/Problem07_BestTimeToBuyAndSellStockWithCooldown');

test('should return max profit', () => {
  const prices = [1, 2, 3, 0, 2];

  expect(maxProfit(prices)).toBe(3);
});
