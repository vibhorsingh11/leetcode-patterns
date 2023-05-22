package org.phoenix.leetcode.challenges;

public class Problem14_MaximumAverageSubarrayI {
    public double findMaxAverage(int[] nums, int k) {
        if (nums.length < k) return -1;
        double maxA = 0, currSum;
        for (int i = 0; i < k; i++) {
            maxA += nums[i];
        }
        currSum = maxA;
        for (int i = k; i < nums.length; i++) {
            currSum += nums[i] - nums[i - k];
            maxA = Math.max(maxA, currSum);
        }
        return maxA / k;
    }
}
