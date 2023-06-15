package org.phoenix.leetcode.challenges;

import org.phoenix.leetcode.challenges.Problem33_MaximumDepthOfBinaryTree.TreeNode;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

public class Problem39_BinaryTreeRightSideView {
    public List<Integer> rightSideView(TreeNode root) {
        List<Integer> list = new ArrayList<>();
        if (root == null) return list;
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        while (!queue.isEmpty()) {
            int size = queue.size();
            int levelSize = queue.size();
            while (size > 0) {
                TreeNode curr = queue.poll();
                if (size == levelSize) list.add(curr.val);
                if (curr.right != null) queue.offer(curr.right);
                if (curr.left != null) queue.offer(curr.left);
                size--;
            }
        }
        return list;
    }
}
