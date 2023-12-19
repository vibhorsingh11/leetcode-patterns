/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = prices[0],
    profit = 0;

  for (let i = 1; i < prices.length; i++) {
    let cost = prices[i] - min;
    profit = Math.max(profit, cost);
    min = Math.min(prices[i], min);
  }

  return profit;
};

//TC:- O(n)
//SC:- O(1)

module.exports = maxProfit;
