package org.phoenix.leetcode.challenges;

public class Problem17_LongestSubarrayOf1AfterDeletingOneElement {
    public int longestSubarray(int[] nums) {
        int index = 0, startPointer = 0, max = 0, countZero = 0;
        //traversing the array
        while (index < nums.length) {
            // counting the 0's'
            if (nums[index] == 0) countZero++;
            // looping till 0's' are greated than 1
            while (countZero > 1) {
                //reducing 0's count by 1 because max count has been reached
                // and we will be moving to the nect window
                if (nums[startPointer] == 0) countZero--;
                // moving sliding windows as 0's are greater than 1 and have to trverse the
                // rest of the array
                startPointer++;
            }
            //Keeping check of longest subarray
            max = Math.max(max, index - startPointer);
            //moving the index further
            index++;
        }
        return max;
    }
}
