package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;
import org.phoenix.leetcode.challenges.Problem33_MaximumDepthOfBinaryTree.TreeNode;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem42_DeleteNodeInABSTTest {

    private final Problem42_DeleteNodeInABST test = new Problem42_DeleteNodeInABST();

    @Test
    void deleteNode() {
        TreeNode root = new TreeNode(5);
        root.left = new TreeNode(3);
        root.left.left = new TreeNode(2);
        root.left.right = new TreeNode(4);
        root.right = new TreeNode(6);
        root.right.right = new TreeNode(7);

        assertEquals(4, test.deleteNode(root, 3).left.val);
    }
}