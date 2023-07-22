package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem75_OnlineStockSpanTest {

    private final Problem75_OnlineStockSpan test = new Problem75_OnlineStockSpan();

    @Test
    void next() {
        assertEquals(1, test.next(100));
    }
}