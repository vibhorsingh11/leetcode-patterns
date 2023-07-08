package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem59_NthTribonacciNumberTest {

    private final Problem59_NthTribonacciNumber test = new Problem59_NthTribonacciNumber();

    @Test
    void tribonacci() {
        assertEquals(4, test.tribonacci(4));
    }
}