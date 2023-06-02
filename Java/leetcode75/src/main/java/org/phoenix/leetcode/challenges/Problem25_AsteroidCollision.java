package org.phoenix.leetcode.challenges;

import java.util.Stack;

public class Problem25_AsteroidCollision {
    public int[] asteroidCollision(int[] asteroids) {
        Stack<Integer> stack = new Stack<>();
        for (int size : asteroids) {
            if (stack.isEmpty() || size > 0) {
                stack.push(size);
            } else {
                while (!stack.isEmpty() && stack.peek() > 0 && stack.peek() < Math.abs(size)) {
                    stack.pop();
                }
                if (stack.peek() < 0 && !stack.isEmpty()) {
                    stack.push(size);
                }
                if (stack.peek() == Math.abs(size)) {
                    stack.pop();
                }
            }
        }
        int[] res = new int[stack.size()];
        for (int i = stack.size() - 1; i >= 0; i--) {
            res[i] = stack.pop();
        }
        return res;
    }
}
