package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem16_MaxConsecutiveOnesIIITest {

    private final Problem16_MaxConsecutiveOnesIII test = new Problem16_MaxConsecutiveOnesIII();

    @Test
    void longestOnes() {
        int[] arr = new int[]{1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0};
        assertEquals(6, test.longestOnes(arr, 2));
    }
}