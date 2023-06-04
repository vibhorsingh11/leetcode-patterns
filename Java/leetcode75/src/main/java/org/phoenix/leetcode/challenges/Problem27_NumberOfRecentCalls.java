package org.phoenix.leetcode.challenges;

import java.util.LinkedList;
import java.util.Queue;

public class Problem27_NumberOfRecentCalls {
    Queue<Integer> q;

    public Problem27_NumberOfRecentCalls() {
        q = new LinkedList<>();
    }

    public int ping(int t) {
        q.offer(t);
        while (q.peek() < t - 3000) {
            q.poll();
        }
        return q.size();
    }
}
