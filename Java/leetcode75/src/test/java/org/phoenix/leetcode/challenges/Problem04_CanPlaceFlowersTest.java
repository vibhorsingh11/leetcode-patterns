package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertTrue;

class Problem04_CanPlaceFlowersTest {

    private final Problem04_CanPlaceFlowers test = new Problem04_CanPlaceFlowers();

    @Test
    void canPlaceFlowers() {
        int[] flowerbed = new int[]{1,0,0,0,1};
        assertTrue(test.canPlaceFlowers(flowerbed,1));
    }
}