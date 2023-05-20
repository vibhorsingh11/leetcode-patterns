package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;

class Problem10_MoveZeroesTest {

    private final Problem10_MoveZeroes test = new Problem10_MoveZeroes();

    @Test
    void moveZeroes() {
        int[] arr = new int[]{0, 1, 0, 3, 12};
        int[] expected = new int[]{1, 3, 12, 0, 0};
        assertArrayEquals(expected, test.moveZeroes((arr)));
    }
}