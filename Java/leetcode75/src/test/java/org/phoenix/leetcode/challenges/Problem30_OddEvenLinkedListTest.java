package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;
import org.phoenix.leetcode.challenges.Problem29_DeleteTheMiddleNodeOfALinkedList.ListNode;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem30_OddEvenLinkedListTest {

    private final Problem30_OddEvenLinkedList test = new Problem30_OddEvenLinkedList();

    @Test
    void oddEvenList() {
        ListNode head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        head.next.next.next = new ListNode(4);
        head.next.next.next.next = new ListNode(5);

        assertEquals(3, test.oddEvenList(head).next.val);
    }
}