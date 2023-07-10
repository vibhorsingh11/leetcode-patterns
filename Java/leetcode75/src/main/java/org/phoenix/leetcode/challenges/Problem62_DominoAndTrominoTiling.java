package org.phoenix.leetcode.challenges;

public class Problem62_DominoAndTrominoTiling {
    public int numTilings(int n) {
        if (n == 1) return 1;
        if (n == 2) return 2;
        int md = 1000000007;
        long[] dp = new long[n + 3];
        dp[0] = 1;
        dp[1] = 2;
        dp[2] = 5;
        for (int i = 3; i < n; i++) {
            dp[i] = ((2 * dp[i - 1]) + dp[i - 3]) % md;
        }
        return (int) dp[n - 1];
    }
}
