package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem69_MinimumFlipsToMakeAORBEqualoCTest {

    private final Problem69_MinimumFlipsToMakeAORBEqualoC test = new Problem69_MinimumFlipsToMakeAORBEqualoC();

    @Test
    void minFlips() {
        int a = 2, b = 6, c = 5;
        assertEquals(3, test.minFlips(a, b, c));
    }
}