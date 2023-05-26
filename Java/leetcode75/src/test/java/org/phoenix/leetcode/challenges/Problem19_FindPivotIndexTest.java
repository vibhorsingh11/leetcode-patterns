package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem19_FindPivotIndexTest {

    private final Problem19_FindPivotIndex test = new Problem19_FindPivotIndex();

    @Test
    void pivotIndex() {
        int[] arr = new int[]{1, 7, 3, 6, 5, 6};
        assertEquals(3, test.pivotIndex(arr));
    }
}