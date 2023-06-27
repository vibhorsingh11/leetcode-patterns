package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem49_KthLargestElementInAnArrayTest {

    private final Problem49_KthLargestElementInAnArray test = new Problem49_KthLargestElementInAnArray();

    @Test
    void findKthLargest() {
        int[] arr = new int[]{3, 2, 1, 5, 6, 4};
        assertEquals(5, test.findKthLargest(arr, 2));
    }
}