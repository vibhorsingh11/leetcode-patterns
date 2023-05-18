package org.phoenix.leetcode.challenges;

public class Problem08_IncreasingTripletSubsequence {
    public boolean increasingTriplet(int[] nums) {
        int min = Integer.MAX_VALUE;
        int secMin = Integer.MAX_VALUE;
        for (int num : nums) {
            if (num <= min) min = num;
            else if (num <= secMin) secMin = num;
            else return true;
        }
        return false;
    }
}
