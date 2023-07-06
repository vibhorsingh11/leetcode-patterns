package org.phoenix.leetcode.challenges;

import java.util.ArrayList;
import java.util.List;

public class Problem57_LetterCombinationsOfAPhoneNumber {
    public List<String> letterCombinations(String digits) {
        List<String> resList = new ArrayList<>();
        if (digits == null || digits.length() == 0) {
            return resList;
        }
        String[] mappings = {"0", "1", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};

        helper(resList, digits, mappings, 0, "");
        return resList;
    }

    private void helper(List<String> resList, String digits, String[] mappings, int index, String currString) {
        if (index == digits.length()) {
            resList.add(currString);
            return;
        }
        String letters = mappings[digits.charAt(index) - '0'];
        for (int i = 0; i < letters.length(); i++) {
            helper(resList, digits, mappings, index + 1, currString + letters.charAt(i));
        }
    }
}
