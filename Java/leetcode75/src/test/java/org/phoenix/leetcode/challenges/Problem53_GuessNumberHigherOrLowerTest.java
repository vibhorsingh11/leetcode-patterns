package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem53_GuessNumberHigherOrLowerTest {

    private final Problem53_GuessNumberHigherOrLower test = new Problem53_GuessNumberHigherOrLower();

    @Test
    void guessNumber() {
        assertEquals(-1, test.guessNumber(10));
    }
}