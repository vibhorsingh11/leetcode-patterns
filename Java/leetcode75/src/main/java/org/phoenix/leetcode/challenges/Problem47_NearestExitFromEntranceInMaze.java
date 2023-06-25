package org.phoenix.leetcode.challenges;

import java.util.LinkedList;
import java.util.Queue;

public class Problem47_NearestExitFromEntranceInMaze {
    public int nearestExit(char[][] maze, int[] entrance) {
        Queue<int[]> queue = new LinkedList<>();
        queue.offer(entrance);

        int level = 0;
        int[][] directions = new int[][]{{1, 0}, {-1, 0}, {0, 1}, {0, -1}};

        boolean[][] visited = new boolean[maze.length][maze[0].length];
        visited[entrance[0]][entrance[1]] = true;

        while (!queue.isEmpty()) {
            level++;
            int size = queue.size();
            while (size-- > 0) {
                int[] coordinates = queue.poll();
                for (int i = 0; i < 4; i++) {
                    int[] dir = directions[i];
                    int nextRow = coordinates[0] + dir[0];
                    int nextCol = coordinates[1] + dir[1];
                    if (nextRow >= 0 && nextCol >= 0 && nextRow < maze.length && nextCol < maze[0].length &&
                            maze[nextRow][nextCol] == '.' && !visited[nextRow][nextCol]) {

                        if (nextCol == 0 || nextRow == 0 || nextRow == maze.length - 1 || nextCol == maze[0].length - 1) {
                            return level;
                        }
                        visited[nextRow][nextCol] = true;
                        queue.offer(new int[]{nextRow, nextCol});
                    }
                }
            }
        }


        return -1;
    }
}
