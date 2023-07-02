package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;

class Problem54_SuccessfulPairsOfSpellsAndPotionsTest {

    private final Problem54_SuccessfulPairsOfSpellsAndPotions test = new Problem54_SuccessfulPairsOfSpellsAndPotions();

    @Test
    void successfulPairs() {
        int[] spells = new int[]{5, 1, 3};
        int[] potions = new int[]{1, 2, 3, 4, 5};

        int[] successfulPairs = new int[]{4, 0, 3};

        assertArrayEquals(successfulPairs, test.successfulPairs(spells, potions, 7));
    }
}