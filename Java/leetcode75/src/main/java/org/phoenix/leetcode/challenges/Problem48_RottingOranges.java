package org.phoenix.leetcode.challenges;

import java.util.LinkedList;
import java.util.Queue;

public class Problem48_RottingOranges {
    public int orangesRotting(int[][] grid) {
        Queue<int[]> queue = new LinkedList<>();
        int freshOranges = 0;
        int minutes = 0;

        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[0].length; j++) {
                if (grid[i][j] == 2) {
                    queue.offer(new int[]{i, j});
                } else if (grid[i][j] == 1) {
                    freshOranges++;
                }
            }
        }

        int[][] directions = new int[][]{{0, 1}, {0, -1}, {1, 0}, {-1, 0}};
        if (freshOranges == 0) return 0;
        while (!queue.isEmpty()) {
            int size = queue.size();
            minutes++;
            while (size-- > 0) {
                int[] rottenOrange = queue.poll();
                for (int[] dir : directions) {
                    int nextRow = dir[0] + rottenOrange[0];
                    int nextCol = dir[1] + rottenOrange[1];
                    if (nextRow < 0 || nextCol < 0 || nextRow >= grid.length || nextCol >= grid[0].length ||
                            grid[nextRow][nextCol] == 0 || grid[nextRow][nextCol] == 2) {
                        continue;
                    }
                    ;
                    grid[nextRow][nextCol] = 2;
                    queue.offer(new int[]{nextRow, nextCol});
                    freshOranges--;
                }
            }
        }
        return freshOranges == 0 ? minutes - 1 : -1;
    }
}
