package org.phoenix.leetcode.challenges;

public class Problem67_CountingBits {
    public int[] countBits(int num) {
        int[] arr = new int[num + 1];
        for (int i = num; num > 0; i--) {
            arr[i] = bits(num);
            num--;
        }
        return arr;
    }

    public int bits(int n) {
        if (n == 0) return 0;

        return (n & 1) + bits(n >> 1);
    }
}
