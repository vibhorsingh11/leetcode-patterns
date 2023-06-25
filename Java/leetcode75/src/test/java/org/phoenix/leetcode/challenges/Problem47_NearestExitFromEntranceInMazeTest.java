package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem47_NearestExitFromEntranceInMazeTest {

    private final Problem47_NearestExitFromEntranceInMaze test = new Problem47_NearestExitFromEntranceInMaze();

    @Test
    void nearestExit() {
        char[][] maze = new char[][]{{'+', '+', '.', '+'}, {'.', '.', '.', '+'}, {'+', '+', '+', '.'}};
        int[] entrance = new int[]{1, 2};

        assertEquals(1, test.nearestExit(maze, entrance));
    }
}