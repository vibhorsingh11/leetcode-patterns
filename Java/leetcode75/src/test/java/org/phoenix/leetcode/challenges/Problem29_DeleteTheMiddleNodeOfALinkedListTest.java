package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;
import org.phoenix.leetcode.challenges.Problem29_DeleteTheMiddleNodeOfALinkedList.ListNode;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem29_DeleteTheMiddleNodeOfALinkedListTest {

    private final Problem29_DeleteTheMiddleNodeOfALinkedList test = new Problem29_DeleteTheMiddleNodeOfALinkedList();

    @Test
    void deleteMiddle() {
        ListNode head = new ListNode(1);
        head.next = new ListNode(3);
        head.next.next = new ListNode(4);
        head.next.next.next = new ListNode(7);
        head.next.next.next.next = new ListNode(1);
        head.next.next.next.next.next = new ListNode(2);
        head.next.next.next.next.next.next = new ListNode(6);

        assertEquals(1, test.deleteMiddle(head).next.next.next.val);
    }
}