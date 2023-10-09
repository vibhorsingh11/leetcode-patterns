const maxProfit = require('../main/Problem109_BestTimeToBuyAndSellStockWithCooldown');

test('should return max profit', () => {
  const prices = [1, 2, 3, 0, 2];

  expect(maxProfit(prices)).toBe(3);
});
