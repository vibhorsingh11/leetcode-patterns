package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem23_EqualRowAndColumnPairsTest {

    private final Problem23_EqualRowAndColumnPairs test = new Problem23_EqualRowAndColumnPairs();

    @Test
    void equalPairs() {
        int[][] grid = new int[][]{{3, 2, 1}, {1, 7, 6}, {2, 7, 7}};
        assertEquals(1, test.equalPairs(grid));
    }
}