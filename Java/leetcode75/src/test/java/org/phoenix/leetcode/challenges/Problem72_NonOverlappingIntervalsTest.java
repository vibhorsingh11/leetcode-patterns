package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem72_NonOverlappingIntervalsTest {

    private final Problem72_NonOverlappingIntervals test = new Problem72_NonOverlappingIntervals();

    @Test
    void eraseOverlapIntervals() {
        int[][] intervals = new int[][]{{1, 2}, {2, 3}, {3, 4}, {1, 3}};

        assertEquals(1, test.eraseOverlapIntervals(intervals));
    }
}