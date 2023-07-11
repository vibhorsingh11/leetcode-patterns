package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem63_UniquePathsTest {

    private final Problem63_UniquePaths test = new Problem63_UniquePaths();

    @Test
    void uniquePaths() {
        assertEquals(28, test.uniquePaths(3, 7));
    }
}