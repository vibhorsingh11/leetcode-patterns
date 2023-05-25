package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem18_FindTheHighestAltitudeTest {

    private final Problem18_FindTheHighestAltitude test = new Problem18_FindTheHighestAltitude();

    @Test
    void largestAltitude() {
        int[] gain = new int[]{-4, -3, -2, -1, 4, 3, 2};
        assertEquals(0, test.largestAltitude(gain));
    }
}