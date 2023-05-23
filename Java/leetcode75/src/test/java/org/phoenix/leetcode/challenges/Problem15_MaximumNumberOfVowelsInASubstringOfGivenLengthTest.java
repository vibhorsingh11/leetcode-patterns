package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem15_MaximumNumberOfVowelsInASubstringOfGivenLengthTest {

    private final Problem15_MaximumNumberOfVowelsInASubstringOfGivenLength test = new Problem15_MaximumNumberOfVowelsInASubstringOfGivenLength();

    @Test
    void maxVowels() {
        String s = "abciiidef";
        assertEquals(3, test.maxVowels(s, 3));
    }
}