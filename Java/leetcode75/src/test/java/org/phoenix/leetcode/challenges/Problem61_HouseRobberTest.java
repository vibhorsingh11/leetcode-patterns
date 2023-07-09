package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem61_HouseRobberTest {

    private final Problem61_HouseRobber test = new Problem61_HouseRobber();

    @Test
    void rob() {
        int[] nums = new int[]{2, 7, 9, 3, 1};

        assertEquals(12, test.rob(nums));
    }
}