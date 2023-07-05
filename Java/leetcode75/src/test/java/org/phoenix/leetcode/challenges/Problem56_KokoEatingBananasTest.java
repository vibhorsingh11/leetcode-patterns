package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem56_KokoEatingBananasTest {

    private final Problem56_KokoEatingBananas test = new Problem56_KokoEatingBananas();

    @Test
    void minEatingSpeed() {
        int[] piles = new int[]{3, 6, 7, 11};

        assertEquals(4, test.minEatingSpeed(piles, 8));
    }
}