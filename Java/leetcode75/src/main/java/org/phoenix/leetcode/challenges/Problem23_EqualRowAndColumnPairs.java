package org.phoenix.leetcode.challenges;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class Problem23_EqualRowAndColumnPairs {
    public int equalPairs(int[][] grid) {
        Map<String, Integer> pairMap = new HashMap<>();
        int pairCount = 0;
        for (int[] row : grid) {
            String key = Arrays.toString(row);
            pairMap.put(key, pairMap.getOrDefault(key, 0) + 1);
        }
        for (int i = 0; i < grid.length; i++) {
            int[] columns = new int[grid.length];
            for (int j = 0; j < grid.length; j++) {
                columns[j] = grid[j][i];
            }
            pairCount += pairMap.getOrDefault(Arrays.toString(columns), 0);
        }
        return pairCount;
    }
}
