package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;
import org.phoenix.leetcode.challenges.Problem33_MaximumDepthOfBinaryTree.TreeNode;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem37_LongestZigZagPathInABinaryTreeTest {

    private final Problem37_LongestZigZagPathInABinaryTree test = new Problem37_LongestZigZagPathInABinaryTree();
    @Test
    void longestZigZag() {
        TreeNode root = new TreeNode(1);
        root.right = new TreeNode(1);
        root.right.left = new TreeNode(1);
        root.right.right = new TreeNode(1);
        root.right.right.left = new TreeNode(1);
        root.right.right.left.right = new TreeNode(1);
        root.right.right.left.right.right = new TreeNode(1);
        root.right.right.right = new TreeNode(1);


        assertEquals(3, test.longestZigZag(root));
    }
}