/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (!prices || prices.length < 2) {
    return 0;
  }

  const n = prices.length;
  // negative value of the first stock price, as we will be buying a stock on the first day
  const buy = [-prices[0], Math.max(-prices[0], -prices[1])];
  // zeros, as we haven't sold any stocks yet
  const sell = [0, Math.max(0, prices[1] - prices[0])];

  for (let i = 2; i < n; i++) {
    // maximum of the previous day's "buy" value and the previous day's "sell" value minus the current stock price
    buy[i] = Math.max(buy[i - 1], sell[i - 2] - prices[i]);
    //maximum of the previous day's "sell" value and the previous day's "buy" value plus the current stock price
    sell[i] = Math.max(sell[i - 1], buy[i - 1] + prices[i]);
  }

  return sell[n - 1];
};

module.exports = maxProfit;
