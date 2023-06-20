package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem44_NumberOfProvincesTest {

    private final Problem44_NumberOfProvinces test = new Problem44_NumberOfProvinces();

    @Test
    void findCircleNum() {
        int[][] isConnected = new int[][]{{1, 1, 0}, {1, 1, 0}, {0, 0, 1}};

        assertEquals(2, test.findCircleNum(isConnected));
    }
}