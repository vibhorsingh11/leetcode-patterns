package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;
import org.phoenix.leetcode.challenges.Problem33_MaximumDepthOfBinaryTree.TreeNode;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem38_LowestCommonAncestorOfABinaryTreeTest {

    private final Problem38_LowestCommonAncestorOfABinaryTree test = new Problem38_LowestCommonAncestorOfABinaryTree();

    @Test
    void lowestCommonAncestor() {
        TreeNode root = new TreeNode(3);
        root.left = new TreeNode(5);
        root.left.left = new TreeNode(6);
        root.left.right = new TreeNode(2);
        root.left.right.left = new TreeNode(7);
        root.left.right.right = new TreeNode(4);
        root.right = new TreeNode(1);
        root.right.left = new TreeNode(0);
        root.right.right = new TreeNode(8);

        TreeNode p = new TreeNode(3);
        TreeNode q = new TreeNode(3);

        assertEquals(3, test.lowestCommonAncestor(root, p, q).val);
    }
}