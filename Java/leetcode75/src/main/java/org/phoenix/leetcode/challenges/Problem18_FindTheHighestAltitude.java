package org.phoenix.leetcode.challenges;

public class Problem18_FindTheHighestAltitude {
    public int largestAltitude(int[] gain) {
        //Highest altitude can be found by prefix sum
        //and keeping track of max high altitude
        int altSum = 0, highestAlt = 0;
        for (int point : gain) {
            altSum += point;
            highestAlt = Math.max(highestAlt, altSum);
        }
        return highestAlt;
    }
}
