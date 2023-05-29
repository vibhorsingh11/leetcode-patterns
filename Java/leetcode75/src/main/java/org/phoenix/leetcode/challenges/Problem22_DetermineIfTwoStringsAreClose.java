package org.phoenix.leetcode.challenges;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class Problem22_DetermineIfTwoStringsAreClose {
    public boolean closeStrings(String word1, String word2) {
        // If length of both word is not same its false
        if (word1.length() != word2.length()) return false;
        Set<Character> set1 = new HashSet<>();
        Set<Character> set2 = new HashSet<>();
        // 2 arrays to store the count of each char from both word
        int[] char1 = new int[26];
        int[] char2 = new int[26];
        //traverse and save the count and unique elements in set
        for (char c : word1.toCharArray()) {
            set1.add(c);
            // c is the current index element and it is being trated with its ASCII value
            // char a(value 97) is being subtracted from current index char and maintained at specific position
            char1[c - 'a']++;
        }
        for (char c : word2.toCharArray()) {
            set2.add(c);
            char2[c - 'a']++;
        }
        Arrays.sort(char1);
        Arrays.sort(char2);
        return set1.equals(set2) && Arrays.equals(char1, char2);
    }
}

