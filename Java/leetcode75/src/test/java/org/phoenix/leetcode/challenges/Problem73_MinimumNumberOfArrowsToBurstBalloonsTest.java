package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem73_MinimumNumberOfArrowsToBurstBalloonsTest {

    private final Problem73_MinimumNumberOfArrowsToBurstBalloons test = new Problem73_MinimumNumberOfArrowsToBurstBalloons();

    @Test
    void findMinArrowShots() {
        int[][] points = new int[][]{{10, 16}, {2, 8}, {1, 6}, {7, 12}};

        assertEquals(2, test.findMinArrowShots(points));
    }
}