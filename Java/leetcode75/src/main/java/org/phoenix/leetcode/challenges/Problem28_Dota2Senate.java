package org.phoenix.leetcode.challenges;

import java.util.LinkedList;
import java.util.Queue;

public class Problem28_Dota2Senate {
    public String predictPartyVictory(String senate) {
        Queue<Integer> rQueue = new LinkedList<>();
        Queue<Integer> dQueue = new LinkedList<>();
        for (int i = 0; i < senate.length(); i++) {
            if (senate.charAt(i) == 'R') {
                rQueue.offer(i);
            } else {
                dQueue.offer(i);
            }
        }
        int n = senate.length();
        while (!rQueue.isEmpty() && !dQueue.isEmpty()) {
            int rturn = rQueue.poll();
            int dturn = dQueue.poll();
            if (dturn < rturn) {
                dQueue.add(dturn + n);
            } else {
                rQueue.add(rturn + n);
            }
        }
        return dQueue.isEmpty() ? "Radiant" : "Dire";
    }
}
