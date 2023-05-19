package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem09_StringCompressionTest {

    private final Problem09_StringCompression test = new Problem09_StringCompression();

    @Test
    void compress() {
        char[] arr = new char[]{'a', 'a', 'b', 'b', 'c', 'c', 'c'};
        assertEquals(6, test.compress(arr));
    }
}