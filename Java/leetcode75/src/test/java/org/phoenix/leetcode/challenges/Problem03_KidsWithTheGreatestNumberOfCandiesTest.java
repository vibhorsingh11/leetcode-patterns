package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem03_KidsWithTheGreatestNumberOfCandiesTest {

    private final Problem03_KidsWithTheGreatestNumberOfCandies test = new Problem03_KidsWithTheGreatestNumberOfCandies();

    @Test
    void kidsWithCandies() {
        int[] candies = new int[]{2,3,5,1,3};
        List<Boolean> expected = Arrays.asList(true,true,true,false,true);
        assertEquals(expected, test.kidsWithCandies(candies, 3));
    }
}