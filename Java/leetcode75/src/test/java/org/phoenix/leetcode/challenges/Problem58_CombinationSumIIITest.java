package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem58_CombinationSumIIITest {

    private final Problem58_CombinationSumIII test = new Problem58_CombinationSumIII();

    @Test
    void combinationSum3() {
        List<List<Integer>> expected = List.of(Arrays.asList(1, 2, 4));
        assertEquals(expected, test.combinationSum3(3, 7));
    }
}