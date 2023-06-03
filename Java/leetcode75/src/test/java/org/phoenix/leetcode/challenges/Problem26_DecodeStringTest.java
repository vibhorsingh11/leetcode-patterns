package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem26_DecodeStringTest {

    private final Problem26_DecodeString test = new Problem26_DecodeString();

    @Test
    void decodeString() {
        String s = "3[a]2[bc]";
        String expected = "aaabcbc";
        assertEquals(expected, test.decodeString(s));
    }
}