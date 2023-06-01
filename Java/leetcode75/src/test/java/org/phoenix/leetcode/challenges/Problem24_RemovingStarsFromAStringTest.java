package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem24_RemovingStarsFromAStringTest {

    private final Problem24_RemovingStarsFromAString test = new Problem24_RemovingStarsFromAString();

    @Test
    void removeStars() {
        String s = "leet**cod*e";
        assertEquals("lecoe", test.removeStars(s));
    }
}