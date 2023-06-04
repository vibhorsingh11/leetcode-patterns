package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem27_NumberOfRecentCallsTest {

    private final Problem27_NumberOfRecentCalls test = new Problem27_NumberOfRecentCalls();

    @Test
    void ping() {
        assertEquals(1, test.ping(1));
        assertEquals(2, test.ping(100));
    }
}