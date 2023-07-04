package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem55_FindPeakElementTest {

    private final Problem55_FindPeakElement test = new Problem55_FindPeakElement();

    @Test
    void findPeakElement() {
        int[] nums = new int[]{1, 2, 3, 1};

        assertEquals(2, test.findPeakElement(nums));
    }
}