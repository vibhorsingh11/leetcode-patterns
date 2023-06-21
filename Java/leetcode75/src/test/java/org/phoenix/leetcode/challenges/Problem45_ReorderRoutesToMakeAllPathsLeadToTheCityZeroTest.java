package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem45_ReorderRoutesToMakeAllPathsLeadToTheCityZeroTest {

    private final Problem45_ReorderRoutesToMakeAllPathsLeadToTheCityZero test =
            new Problem45_ReorderRoutesToMakeAllPathsLeadToTheCityZero();

    @Test
    void minReorder() {
        int[][] connections = new int[][]{{0, 1}, {1, 3}, {2, 3}, {4, 0}, {4, 5}};
        assertEquals(3, test.minReorder(6, connections));
    }
}