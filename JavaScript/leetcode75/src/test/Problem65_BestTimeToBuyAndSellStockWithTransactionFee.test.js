const maxProfit = require("../main/Problem65_BestTimeToBuyAndSellStockWithTransactionFee");

test("should return max profit", () => {
  const prices = [1, 3, 2, 8, 4, 9],
    fee = 2;
  expect(maxProfit(prices, fee)).toBe(8);
});
