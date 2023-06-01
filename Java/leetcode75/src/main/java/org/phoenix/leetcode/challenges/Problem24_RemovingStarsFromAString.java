package org.phoenix.leetcode.challenges;

public class Problem24_RemovingStarsFromAString {
    public String removeStars(String s) {
        int j = 0;
        StringBuilder str = new StringBuilder();
        char[] countArr = new char[s.length()];
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == '*') {
                j--;
            } else {
                countArr[j++] = s.charAt(i);
            }
        }
        for (int i = 0; i < j; i++) {
            str.append(countArr[i]);
        }
        return str.toString();
    }
}
