package org.phoenix.leetcode.challenges;

import java.util.HashMap;
import java.util.Map;

public class Problem13_MaxNumberOfKSumPairs {
    public int maxOperations(int[] nums, int k) {
        int pairs = 0;
        Map<Integer, Integer> map = new HashMap<>();
        for (int num : nums) {
            map.put(num, map.getOrDefault(num, 0) + 1);
        }
        for (int key : map.keySet()) {
            pairs += Math.max(map.getOrDefault(key, 0), map.getOrDefault(key - k, 0));
        }
        return pairs / 2;
    }
}
