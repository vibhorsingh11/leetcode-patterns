package org.phoenix.leetcode.challenges;

import org.phoenix.leetcode.challenges.Problem29_DeleteTheMiddleNodeOfALinkedList.ListNode;

public class Problem32_MaximumTwinSumOfALinkedList {
    public int pairSum(ListNode head) {
        if (head == null) {
            return 0;
        }
        ListNode slow = head, fast = head;
        // Finding the middle node for reversing the half
        while (fast != null && fast.next != null) {
            fast = fast.next.next;
            slow = slow.next;
        }
        // Reversing the rest half of the list
        ListNode prev = null, nextNode;
        while (slow != null) {
            nextNode = slow.next;
            slow.next = prev;
            prev = slow;
            slow = nextNode;
        }
        int maxSum = 0;
        //To check the twin sum taking the head
        //comparing the max sum and updating
        ListNode start = head;
        while (prev != null) {
            maxSum = Math.max(maxSum, start.val + prev.val);
            prev = prev.next;
            start = start.next;
        }
        return maxSum;
    }
}