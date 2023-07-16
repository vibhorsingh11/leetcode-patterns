package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem68_SingleNumberTest {

    private final Problem68_SingleNumber test = new Problem68_SingleNumber();

    @Test
    void singleNumber() {
        int[] arr = new int[]{4, 1, 2, 1, 2};
        assertEquals(4, test.singleNumber(arr));
    }
}