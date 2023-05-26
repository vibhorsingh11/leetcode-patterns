package org.phoenix.leetcode.challenges;

public class Problem19_FindPivotIndex {
    public int pivotIndex(int[] nums) {
        int sum = 0, leftSum = 0;
        for (int num : nums) {
            sum += num;
        }
        for (int i = 0; i < nums.length; i++) {
            //Getting right side sum by subtracting from total sum, the current value and left sum
            int rightSum = sum - leftSum - nums[i];
            //If found then return the current index
            if (leftSum == rightSum) {
                return i;
            }
            //calculating the left side sum while traversing
            leftSum += nums[i];
        }
        return -1;
    }
}
