package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem14_MaximumAverageSubarrayITest {

    private final Problem14_MaximumAverageSubarrayI test = new Problem14_MaximumAverageSubarrayI();

    @Test
    void findMaxAverage() {
        int[] arr = new int[]{1, 12, -5, -6, 50, 3};
        assertEquals(12.75000, test.findMaxAverage(arr, 4));
    }
}