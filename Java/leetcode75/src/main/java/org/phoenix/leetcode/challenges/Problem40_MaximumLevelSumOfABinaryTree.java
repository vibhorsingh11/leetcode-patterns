package org.phoenix.leetcode.challenges;

import org.phoenix.leetcode.challenges.Problem33_MaximumDepthOfBinaryTree.TreeNode;

import java.util.LinkedList;
import java.util.Queue;

public class Problem40_MaximumLevelSumOfABinaryTree {
    public int maxLevelSum(TreeNode root) {
        int level = 0;
        int ans = 0, max = Integer.MIN_VALUE;
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        while (!queue.isEmpty()) {
            int size = queue.size();
            int sum = 0;
            level++;
            while (size > 0) {
                TreeNode curr = queue.poll();
                sum += curr.val;
                if (curr.right != null) queue.offer(curr.right);
                if (curr.left != null) queue.offer(curr.left);
                size--;
            }
            if (max < sum) {
                max = sum;
                ans = level;
            }
        }
        return ans;
    }
}
