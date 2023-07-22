package org.phoenix.leetcode.challenges;

import java.util.Stack;

public class Problem75_OnlineStockSpan {
    Stack<Integer> prices, weights;

    public Problem75_OnlineStockSpan() {
        prices = new Stack<>();
        weights = new Stack<>();
    }

    public int next(int price) {
        int w = 1;
        while (!prices.isEmpty() && prices.peek() <= price) {
            prices.pop();
            w += weights.pop();
        }

        prices.push(price);
        weights.push(w);
        return w;
    }
}
