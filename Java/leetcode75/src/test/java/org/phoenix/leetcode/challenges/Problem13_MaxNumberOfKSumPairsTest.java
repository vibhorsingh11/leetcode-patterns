package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem13_MaxNumberOfKSumPairsTest {

    private final Problem13_MaxNumberOfKSumPairs test = new Problem13_MaxNumberOfKSumPairs();

    @Test
    void maxOperations() {
        int[] arr = new int[]{1, 2, 3, 4};
        assertEquals(2, test.maxOperations(arr, 5));
    }
}