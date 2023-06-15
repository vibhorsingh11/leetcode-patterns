package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;
import org.phoenix.leetcode.challenges.Problem33_MaximumDepthOfBinaryTree.TreeNode;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem39_BinaryTreeRightSideViewTest {

    private final Problem39_BinaryTreeRightSideView test = new Problem39_BinaryTreeRightSideView();

    @Test
    void rightSideView() {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(1);
        root.left.right = new TreeNode(5);
        root.right = new TreeNode(3);
        root.right.right = new TreeNode(4);

        List<Integer> list = Arrays.asList(1, 3, 4);

        assertEquals(list, test.rightSideView(root));
    }
}