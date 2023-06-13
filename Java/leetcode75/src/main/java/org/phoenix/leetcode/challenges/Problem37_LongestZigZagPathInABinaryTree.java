package org.phoenix.leetcode.challenges;

import org.phoenix.leetcode.challenges.Problem33_MaximumDepthOfBinaryTree.TreeNode;

public class Problem37_LongestZigZagPathInABinaryTree {
    int path = 0;

    public int longestZigZag(TreeNode root) {
        maxZigZag(root, "left", 0);
        maxZigZag(root, "right", 0);
        return path;
    }

    public void maxZigZag(TreeNode root, String direction, int steps) {
        if (root == null) return;
        path = Math.max(path, steps);
        if (direction == "left") {
            maxZigZag(root.left, "right", steps + 1);
            maxZigZag(root.right, "left", 1);
        } else {
            maxZigZag(root.right, "left", steps + 1);
            maxZigZag(root.left, "right", 1);
        }
    }
}
