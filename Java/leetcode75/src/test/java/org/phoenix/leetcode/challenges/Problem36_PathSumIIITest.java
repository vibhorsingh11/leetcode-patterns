package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;
import org.phoenix.leetcode.challenges.Problem33_MaximumDepthOfBinaryTree.TreeNode;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem36_PathSumIIITest {

    private final Problem36_PathSumIII test = new Problem36_PathSumIII();

    @Test
    void pathSum() {
        TreeNode root = new TreeNode(10);
        root.left = new TreeNode(5);
        root.left.left = new TreeNode(3);
        root.left.left.left = new TreeNode(3);
        root.left.left.right = new TreeNode(-2);
        root.left.right = new TreeNode(2);
        root.right = new TreeNode(-3);
        root.right.right = new TreeNode(11);
        root.left.right.right = new TreeNode(1);

        assertEquals(3, test.pathSum(root, 8));
    }
}