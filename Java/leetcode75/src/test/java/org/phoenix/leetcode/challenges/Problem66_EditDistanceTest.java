package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem66_EditDistanceTest {

    private final Problem66_EditDistance test = new Problem66_EditDistance();

    @Test
    void minDistance() {
        String word1 = "horse", word2 = "ros";
        assertEquals(3, test.minDistance(word1, word2));
    }
}