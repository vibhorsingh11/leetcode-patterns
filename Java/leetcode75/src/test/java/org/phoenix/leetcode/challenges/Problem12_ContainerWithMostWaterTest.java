package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem12_ContainerWithMostWaterTest {

    private final Problem12_ContainerWithMostWater test = new Problem12_ContainerWithMostWater();

    @Test
    void maxArea() {
        int[] height = new int[]{1,8,6,2,5,4,8,3,7};
        assertEquals(49, test.maxArea(height));
    }
}