package org.phoenix.leetcode.challenges;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem01_MergeStringsAlternatelyTest {

    private final Problem01_MergeStringsAlternately test = new Problem01_MergeStringsAlternately();

    @org.junit.jupiter.api.Test
    void mergeAlternately() {
        String word1 = "abc";
        String word2 = "pqr";
        assertEquals("apbqcr", test.mergeAlternately(word1, word2));

        word1 = "ab";
        word2 = "pqrs";
        assertEquals("apbqrs", test.mergeAlternately(word1, word2));
    }
}