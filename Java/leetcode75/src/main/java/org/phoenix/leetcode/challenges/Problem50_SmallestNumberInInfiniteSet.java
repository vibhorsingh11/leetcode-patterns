package org.phoenix.leetcode.challenges;

import java.util.HashSet;
import java.util.PriorityQueue;

public class Problem50_SmallestNumberInInfiniteSet {
    private final HashSet<Integer> existedValues;
    private final PriorityQueue<Integer> pq;
    private Integer curr;

    public Problem50_SmallestNumberInInfiniteSet() {
        existedValues = new HashSet<>();
        pq = new PriorityQueue<>();
        curr = 1;
    }

    public int popSmallest() {
        int res;
        if (!pq.isEmpty()) {
            res = pq.poll();
            existedValues.remove(res);
        } else {
            res = curr;
            curr++;
        }
        return res;
    }

    public void addBack(int num) {
        if (curr <= num || existedValues.contains(num)) {
            return;
        }
        pq.add(num);
        existedValues.add(num);
    }
}
