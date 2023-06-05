package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem28_Dota2SenateTest {

    private final Problem28_Dota2Senate test = new Problem28_Dota2Senate();

    @Test
    void predictPartyVictory() {
        String senate = "RDD";
        assertEquals("Dire", test.predictPartyVictory(senate));
    }
}