package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Problem02_GreatestCommonDivisorOfStringsTest {

    private final Problem02_GreatestCommonDivisorOfStrings test = new Problem02_GreatestCommonDivisorOfStrings();

    @Test
    void gcdOfStrings() {
        assertEquals("AB", test.gcdOfStrings("ABABAB", "ABAB"));
    }
}