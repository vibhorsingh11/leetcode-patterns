package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem62_DominoAndTrominoTilingTest {

    private final Problem62_DominoAndTrominoTiling test = new Problem62_DominoAndTrominoTiling();

    @Test
    void numTilings() {
        assertEquals(5, test.numTilings(3));
    }
}