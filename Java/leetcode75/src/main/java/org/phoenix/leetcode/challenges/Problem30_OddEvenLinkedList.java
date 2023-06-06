package org.phoenix.leetcode.challenges;

import org.phoenix.leetcode.challenges.Problem29_DeleteTheMiddleNodeOfALinkedList.ListNode;

public class Problem30_OddEvenLinkedList {
    public ListNode oddEvenList(ListNode head) {
        ListNode even = head.next;
        ListNode odd = head, evenStart = even;
        while (even != null && even.next != null) {
            odd.next = even.next;
            odd = odd.next;
            even.next = odd.next;
            even = even.next;
        }
        odd.next = evenStart;
        return head;
    }
}
