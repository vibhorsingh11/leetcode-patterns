package org.phoenix.leetcode.challenges;

public class Problem02_GreatestCommonDivisorOfStrings {
    public String gcdOfStrings(String str1, String str2) {
        if (!(str1 + str2).equals(str2 + str1)) {
            return "";
        }
        int gcdLength = gcdOfLength(str1.length(), str2.length());
        return str1.substring(0, gcdLength);
    }

    private int gcdOfLength(int m, int n) {
        if (n == 0) return m;
        return gcdOfLength(n, (m % n));
    }
}
