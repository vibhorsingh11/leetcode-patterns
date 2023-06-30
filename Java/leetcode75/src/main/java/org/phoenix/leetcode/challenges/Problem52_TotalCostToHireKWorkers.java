package org.phoenix.leetcode.challenges;

import java.util.PriorityQueue;

public class Problem52_TotalCostToHireKWorkers {
    public long totalCost(int[] costs, int k, int candidates) {
        PriorityQueue<Integer> firstHalf = new PriorityQueue<>();
        PriorityQueue<Integer> lastHalf = new PriorityQueue<>();

        for (int i = 0; i < candidates; i++) {
            firstHalf.add(costs[i]);
        }
        int index = Math.max(candidates, costs.length - candidates);
        for (int i = index; i < costs.length; i++) {
            lastHalf.add(costs[i]);
        }

        int nextFirst = candidates;
        int nextLast = costs.length - candidates - 1;
        long result = 0;
        for (int i = 0; i < k; i++) {
            if (lastHalf.isEmpty() || !firstHalf.isEmpty() && firstHalf.peek() <= lastHalf.peek()) {
                result += firstHalf.poll();
                if (nextFirst <= nextLast) {
                    firstHalf.add(costs[nextFirst]);
                    nextFirst++;
                }
            } else {
                result += lastHalf.poll();
                if (nextFirst <= nextLast) {
                    lastHalf.add(costs[nextLast]);
                    nextLast--;
                }
            }
        }
        return result;
    }
}
