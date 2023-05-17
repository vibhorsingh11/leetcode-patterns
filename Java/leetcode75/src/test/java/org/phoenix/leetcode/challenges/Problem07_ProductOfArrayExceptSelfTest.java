package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;

class Problem07_ProductOfArrayExceptSelfTest {

    private final Problem07_ProductOfArrayExceptSelf test = new Problem07_ProductOfArrayExceptSelf();

    @Test
    void productExceptSelf() {
        int[] nums = new int[]{1,2,3,4};
        int[] expected = new int[]{24,12,8,6};
        assertArrayEquals(expected, test.productExceptSelf(nums));
    }
}