package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;

class Problem67_CountingBitsTest {

    private final Problem67_CountingBits test = new Problem67_CountingBits();

    @Test
    void countBits() {
        int[] expected = new int[]{0, 1, 1};
        assertArrayEquals(expected, test.countBits(2));
    }
}