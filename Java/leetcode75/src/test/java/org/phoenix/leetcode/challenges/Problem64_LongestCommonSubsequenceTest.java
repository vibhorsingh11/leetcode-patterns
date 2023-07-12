package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem64_LongestCommonSubsequenceTest {

    private final Problem64_LongestCommonSubsequence test = new Problem64_LongestCommonSubsequence();

    @Test
    void longestCommonSubsequence() {
        String text1 = "abcde", text2 = "ace";

        assertEquals(3, test.longestCommonSubsequence(text1, text2));
    }
}