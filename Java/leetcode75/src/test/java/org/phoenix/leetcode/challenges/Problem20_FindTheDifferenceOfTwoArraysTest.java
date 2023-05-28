package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem20_FindTheDifferenceOfTwoArraysTest {

    private final Problem20_FindTheDifferenceOfTwoArrays test = new Problem20_FindTheDifferenceOfTwoArrays();

    @Test
    void findDifference() {
        int[] nums1 = new int[]{1, 2, 3};
        int[] nums2 = new int[]{2, 4, 6};
        List<List<Integer>> expected = new ArrayList<>();
        expected.add(Arrays.asList(1, 3));
        expected.add(Arrays.asList(4, 6));
        assertEquals(expected, test.findDifference(nums1, nums2));
    }
}