/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const n = prices.length;

  const dp = new Array(n + 2).fill(null).map(() => new Array(2).fill(0));

  for (let i = 0; i < 2; i++) dp[n][i] = 0;

  //Opposite of recusion so from n-1 to 0
  for (let i = n - 1; i >= 0; i--) {
    for (let buy = 0; buy < 2; buy++) {
      let profit = 0;
      if (buy) {
        profit += Math.max(-prices[i] + dp[i + 1][0], dp[i + 1][1]);
      } else {
        profit += Math.max(prices[i] + dp[i + 2][1], dp[i + 1][0]);
      }
      dp[i][buy] = profit;
    }
  }
  return dp[0][1];
};

module.exports = maxProfit;
