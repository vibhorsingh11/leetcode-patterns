package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem05_ReverseVowelsOfAStringTest {

    private final Problem05_ReverseVowelsOfAString test = new Problem05_ReverseVowelsOfAString();

    @Test
    void reverseVowels() {
        assertEquals("leotcede", test.reverseVowels("leetcode"));
    }
}