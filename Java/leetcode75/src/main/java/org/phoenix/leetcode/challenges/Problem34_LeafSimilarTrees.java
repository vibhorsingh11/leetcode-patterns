package org.phoenix.leetcode.challenges;

import org.phoenix.leetcode.challenges.Problem33_MaximumDepthOfBinaryTree.TreeNode;

import java.util.ArrayList;
import java.util.List;

public class Problem34_LeafSimilarTrees {
    public boolean leafSimilar(TreeNode root1, TreeNode root2) {
        List<Integer> left = new ArrayList<>();
        List<Integer> right = new ArrayList<>();
        dfs(root1, left);
        dfs(root2, right);
        return left.equals(right);
    }

    public void dfs(TreeNode root, List<Integer> leafList) {
        if (root == null) return;
        if (root.left == null && root.right == null) {
            leafList.add(root.val);
        }
        dfs(root.left, leafList);
        dfs(root.right, leafList);
    }
}
