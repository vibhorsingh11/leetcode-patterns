package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem17_LongestSubarrayOf1AfterDeletingOneElementTest {

    private final Problem17_LongestSubarrayOf1AfterDeletingOneElement test = new Problem17_LongestSubarrayOf1AfterDeletingOneElement();

    @Test
    void longestSubarray() {
        int[] arr = new int[]{0, 1, 1, 1, 0, 1, 1, 0, 1};
        assertEquals(5, test.longestSubarray(arr));
    }
}