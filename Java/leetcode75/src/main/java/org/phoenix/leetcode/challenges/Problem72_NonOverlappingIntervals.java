package org.phoenix.leetcode.challenges;

import java.util.Arrays;
import java.util.Comparator;

public class Problem72_NonOverlappingIntervals {
    public int eraseOverlapIntervals(int[][] intervals) {
        Arrays.sort(intervals, Comparator.comparingInt(a -> a[1]));
        int res = 0;
        int k = Integer.MIN_VALUE;
        for (int[] interval : intervals) {
            int x = interval[0];
            int y = interval[1];

            if (x >= k) {
                k = y;
            } else {
                res++;
            }
        }
        return res;
    }
}
