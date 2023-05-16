package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem06_ReverseWordsInAStringTest {

    private final Problem06_ReverseWordsInAString test = new Problem06_ReverseWordsInAString();

    @Test
    void reverseWords() {
        String s = "a good   example";
        assertEquals("example good a", test.reverseWords(s));
    }
}