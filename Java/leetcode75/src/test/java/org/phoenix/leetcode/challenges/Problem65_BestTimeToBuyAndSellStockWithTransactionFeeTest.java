package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem65_BestTimeToBuyAndSellStockWithTransactionFeeTest {

    private final Problem65_BestTimeToBuyAndSellStockWithTransactionFee test = new Problem65_BestTimeToBuyAndSellStockWithTransactionFee();

    @Test
    void maxProfit() {
        int[] prices = new int[]{1, 3, 2, 8, 4, 9};
        assertEquals(8, test.maxProfit(prices, 2));
    }
}