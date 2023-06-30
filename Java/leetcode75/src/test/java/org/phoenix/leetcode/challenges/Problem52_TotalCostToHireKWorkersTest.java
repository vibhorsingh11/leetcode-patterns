package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem52_TotalCostToHireKWorkersTest {

    private final Problem52_TotalCostToHireKWorkers test = new Problem52_TotalCostToHireKWorkers();

    @Test
    void totalCost() {
        int[] costs = new int[]{17, 12, 10, 2, 7, 2, 11, 20, 8};
        assertEquals(11, test.totalCost(costs, 3, 4));
    }
}