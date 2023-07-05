package org.phoenix.leetcode.challenges;

public class Problem56_KokoEatingBananas {
    public int minEatingSpeed(int[] piles, int h) {
        int left = 0;
        int right = 1000000000;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            int hour = 0;
            for (int pile : piles) {
                hour += Math.ceil((double) pile / mid);
            }
            if (hour <= h) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }
}
