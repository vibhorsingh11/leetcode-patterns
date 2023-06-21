package org.phoenix.leetcode.challenges;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

public class Problem45_ReorderRoutesToMakeAllPathsLeadToTheCityZero {
    public int minReorder(int n, int[][] connections) {
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            adj.add(new LinkedList<>());
        }
        for (int[] con : connections) {
            adj.get(con[0]).add(con[1]);
            adj.get(con[1]).add(-con[0]);
        }
        return dfs(adj, new boolean[n], 0);
    }

    public int dfs(List<List<Integer>> adj, boolean[] visited, int node) {
        int count = 0;
        visited[node] = true;
        for (var child : adj.get(node)) {
            if (!visited[Math.abs(child)]) {
                count += dfs(adj, visited, Math.abs(child)) + (child > 0 ? 1 : 0);
            }
        }
        return count;
    }
}
