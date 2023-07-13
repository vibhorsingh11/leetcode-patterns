/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  //Edge case
  if (prices.length < 2) {
    return 0;
  }
  //chossen first share and added transaction fee
  let buyProfit = -prices[0] - fee;
  let sellProfit = 0;

  for (let price of prices) {
    //keeping track of last buy of share
    let lastBuy = buyProfit;
    //check to hold the share or buy
    buyProfit = Math.max(buyProfit, sellProfit - price - fee);
    //check if sell profit is more than previous, then sell and update the sellProfit
    sellProfit = Math.max(sellProfit, lastBuy + price);
  }
  return sellProfit;
};

module.exports = maxProfit;
