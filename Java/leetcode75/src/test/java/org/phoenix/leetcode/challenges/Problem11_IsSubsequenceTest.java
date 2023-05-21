package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertTrue;

class Problem11_IsSubsequenceTest {

    private final Problem11_IsSubsequence test = new Problem11_IsSubsequence();

    @Test
    void isSubsequence() {
        String s = "abc", t = "ahbgdc";
        assertTrue(test.isSubsequence(s, t));
    }
}