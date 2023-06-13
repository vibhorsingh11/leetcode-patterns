package org.phoenix.leetcode.challenges;

import org.phoenix.leetcode.challenges.Problem33_MaximumDepthOfBinaryTree.TreeNode;

public class Problem36_PathSumIII {
    int res = 0;

    public int pathSum(TreeNode root, int targetSum) {
        if (root == null) return 0;

        helper(root, targetSum);
        pathSum(root.left, targetSum);
        pathSum(root.right, targetSum);
        return res;
    }

    public void helper(TreeNode root, long sum) {
        if (root == null) {
            return;
        }
        if (sum - root.val == 0) {
            res++;
        }
        helper(root.left, sum - root.val);
        helper(root.right, sum - root.val);
    }
}
