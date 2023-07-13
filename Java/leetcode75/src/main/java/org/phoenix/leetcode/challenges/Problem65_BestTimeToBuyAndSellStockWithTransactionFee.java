package org.phoenix.leetcode.challenges;

public class Problem65_BestTimeToBuyAndSellStockWithTransactionFee {
    public int maxProfit(int[] prices, int fee) {
        // Length of the array
        int n = prices.length;
        // Special case
        if (n < 2) {
            return 0;
        }
        // Price on which we buy the stock
        int buy = -prices[0] - fee;
        // Price on which we sell the stock
        int sell = 0;
        // Loop through the array
        for (int i = 1; i < n; i++) {
            // Last buying price
            int lastBuy = buy;
            buy = Math.max(buy, sell - prices[i] - fee);
            sell = Math.max(sell, lastBuy + prices[i]);
        }
        return sell;
    }
}
