const maxProfit = require('../../main/03-SlidingWindow/Problem01_BestTimeToBuyAndSellStock');

test('should return max profit', () => {
  const prices = [7, 1, 5, 3, 6, 4];

  expect(maxProfit(prices)).toBe(5);
});
