package org.phoenix.leetcode.challenges;

import org.phoenix.leetcode.challenges.Problem33_MaximumDepthOfBinaryTree.TreeNode;

public class Problem35_CountGoodNodesInBinaryTree {
    public int goodNodes(TreeNode root) {
        return dfs(root, Integer.MIN_VALUE);
    }

    public int dfs(TreeNode root, int maxValue) {
        if (root == null) return 0;
        int goodNodes = root.val >= maxValue ? 1 : 0;
        goodNodes += dfs(root.left, Math.max(maxValue, root.val));
        goodNodes += dfs(root.right, Math.max(maxValue, root.val));
        return goodNodes;
    }
}
