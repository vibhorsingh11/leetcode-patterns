package org.phoenix.leetcode.challenges;

public class Problem44_NumberOfProvinces {
    public int findCircleNum(int[][] isConnected) {
        int n = isConnected.length;
        int components = 0;
        boolean[] visited = new boolean[n];

        for (int i = 0; i < n; i++) {
            if (!visited[i]) {
                components++;
                dfs(i, isConnected, visited);
            }
        }
        return components;
    }

    public void dfs(int currNode, int[][] isConnected, boolean[] visit) {
        visit[currNode] = true;
        for (int i = 0; i < isConnected.length; i++) {
            if (isConnected[currNode][i] == 1 && !visit[i]) {
                dfs(i, isConnected, visit);
            }
        }
    }
}
