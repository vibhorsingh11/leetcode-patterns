package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertTrue;

class Problem21_UniqueNumberOfOccurrencesTest {

    private final Problem21_UniqueNumberOfOccurrences test = new Problem21_UniqueNumberOfOccurrences();

    @Test
    void uniqueOccurrences() {
        int[] arr = new int[]{-3, 0, 1, -3, 1, 1, 1, -3, 10, 0};
        assertTrue(test.uniqueOccurrences(arr));
    }
}