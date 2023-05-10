package org.phoenix.leetcode.challenges;

public class Problem01_MergeStringsAlternately {

    public String mergeAlternately(String word1, String word2) {
        StringBuilder str = new StringBuilder();
        int m = word1.length();
        int n = word2.length();
        int i = 0;
        int j = 0;
        
        while (i < m || j < n) {
            if (i < m) str.append(word1.charAt(i++));
            if (j < n) str.append(word2.charAt(j++));
        }
        return str.toString();
    }
}
