package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;
import org.phoenix.leetcode.challenges.Problem33_MaximumDepthOfBinaryTree.TreeNode;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem33_MaximumDepthOfBinaryTreeTest {

    private final Problem33_MaximumDepthOfBinaryTree test = new Problem33_MaximumDepthOfBinaryTree();

    @Test
    void maxDepth() {
        TreeNode root = new TreeNode(3);
        root.left = new TreeNode(9);
        root.right = new TreeNode(20);
        root.right.left = new TreeNode(15);
        root.right.right = new TreeNode(7);

        assertEquals(3, test.maxDepth(root));
    }
}