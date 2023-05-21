package org.phoenix.leetcode.challenges;

public class Problem12_ContainerWithMostWater {
    public int maxArea(int[] height) {
        int end = height.length - 1;
        int start = 0;
        int maxArea = Integer.MIN_VALUE;
        while (start < end) {
            maxArea = Math.max(maxArea, Math.min(height[start], height[end]) * (end - start));

            if (height[start] < height[end]) {
                start++;
            } else {
                end--;
            }
        }
        return maxArea;
    }
}
