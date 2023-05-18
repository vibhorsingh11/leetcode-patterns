package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertTrue;

class Problem08_IncreasingTripletSubsequenceTest {

    private final Problem08_IncreasingTripletSubsequence test = new Problem08_IncreasingTripletSubsequence();

    @Test
    void increasingTriplet() {
        int[] arr = new int[]{2, 1, 5, 0, 4, 6};
        assertTrue(test.increasingTriplet(arr));
    }
}