package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;
import org.phoenix.leetcode.challenges.Problem33_MaximumDepthOfBinaryTree.TreeNode;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem40_MaximumLevelSumOfABinaryTreeTest {
    private final Problem40_MaximumLevelSumOfABinaryTree test = new Problem40_MaximumLevelSumOfABinaryTree();

    @Test
    void maxLevelSum() {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(7);
        root.left.left = new TreeNode(7);
        root.left.right = new TreeNode(-8);
        root.right = new TreeNode(0);

        assertEquals(2, test.maxLevelSum(root));
    }
}