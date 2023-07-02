package org.phoenix.leetcode.challenges;

import java.util.Arrays;

public class Problem54_SuccessfulPairsOfSpellsAndPotions {
    public int[] successfulPairs(int[] spells, int[] potions, long success) {
        int n = spells.length;
        int m = potions.length;
        int[] pairs = new int[n];
        Arrays.sort(potions);
        for (int i = 0; i < pairs.length; i++) {
            int left = 0;
            int right = m - 1;
            int spell = spells[i];
            while (left <= right) {
                int mid = left + (right - left) / 2;
                long product = (long) spell * potions[mid];
                if (product >= success) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
            pairs[i] = m - left;
        }

        return pairs;
    }
}
