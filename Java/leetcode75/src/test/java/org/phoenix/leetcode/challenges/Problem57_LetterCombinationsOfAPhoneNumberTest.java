package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem57_LetterCombinationsOfAPhoneNumberTest {

    private final Problem57_LetterCombinationsOfAPhoneNumber test = new Problem57_LetterCombinationsOfAPhoneNumber();

    @Test
    void letterCombinations() {
        List<String> expected = Arrays.asList("ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf");
        assertEquals(expected, test.letterCombinations("23"));
    }
}