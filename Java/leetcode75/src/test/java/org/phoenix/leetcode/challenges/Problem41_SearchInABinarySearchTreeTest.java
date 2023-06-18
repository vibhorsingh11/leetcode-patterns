package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;
import org.phoenix.leetcode.challenges.Problem33_MaximumDepthOfBinaryTree.TreeNode;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem41_SearchInABinarySearchTreeTest {
    private final Problem41_SearchInABinarySearchTree test = new Problem41_SearchInABinarySearchTree();

    @Test
    void searchBST() {
        TreeNode root = new TreeNode(4);
        root.left = new TreeNode(2);
        root.left.left = new TreeNode(1);
        root.left.right = new TreeNode(3);
        root.right = new TreeNode(7);

        assertEquals(1, test.searchBST(root, 2).left.val);
    }
}