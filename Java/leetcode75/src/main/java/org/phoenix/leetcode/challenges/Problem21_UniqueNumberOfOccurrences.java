package org.phoenix.leetcode.challenges;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class Problem21_UniqueNumberOfOccurrences {
    public boolean uniqueOccurrences(int[] arr) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int item : arr) {
            map.put(item, map.getOrDefault(item, 0) + 1);
        }
        Set<Integer> set = new HashSet<>(map.values());
        return map.size() == set.size();
    }
}
