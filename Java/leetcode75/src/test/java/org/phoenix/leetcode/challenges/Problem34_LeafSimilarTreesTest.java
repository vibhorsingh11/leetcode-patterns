package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;
import org.phoenix.leetcode.challenges.Problem33_MaximumDepthOfBinaryTree.TreeNode;

import static org.junit.jupiter.api.Assertions.assertFalse;

class Problem34_LeafSimilarTreesTest {

    private final Problem34_LeafSimilarTrees test = new Problem34_LeafSimilarTrees();

    @Test
    void leafSimilar() {
        TreeNode root1 = new TreeNode(1);
        root1.left = new TreeNode(2);
        root1.right = new TreeNode(3);

        TreeNode root2 = new TreeNode(1);
        root2.left = new TreeNode(3);
        root2.right = new TreeNode(2);

        assertFalse(test.leafSimilar(root1, root2));
    }
}