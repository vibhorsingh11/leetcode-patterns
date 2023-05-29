package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertTrue;

class Problem22_DetermineIfTwoStringsAreCloseTest {

    private final Problem22_DetermineIfTwoStringsAreClose test = new Problem22_DetermineIfTwoStringsAreClose();

    @Test
    void closeStrings() {
        String word1 = "cabbba", word2 = "abbccc";
        assertTrue(test.closeStrings(word1, word2));
    }
}