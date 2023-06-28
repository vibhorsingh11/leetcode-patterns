package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem50_SmallestNumberInInfiniteSetTest {

    private final Problem50_SmallestNumberInInfiniteSet test = new Problem50_SmallestNumberInInfiniteSet();

    @Test
    void popSmallest() {
        test.addBack(2);
        assertEquals(1, test.popSmallest());
    }
}