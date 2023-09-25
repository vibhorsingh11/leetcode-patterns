const coinChange = require('../main/Problem102_CoinChange');

test('should return fewest number', () => {
  const coins = [1, 2, 5],
    amount = 11;

  expect(coinChange(coins, amount)).toBe(3);
});
