package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem51_MaximumSubsequenceScoreTest {

    private final Problem51_MaximumSubsequenceScore test = new Problem51_MaximumSubsequenceScore();

    @Test
    void maxScore() {
        int[] nums1 = new int[]{1, 3, 3, 2};
        int[] nums2 = new int[]{2, 1, 3, 4};

        assertEquals(12, test.maxScore(nums1, nums2, 3));
    }
}