package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;
import org.phoenix.leetcode.challenges.Problem29_DeleteTheMiddleNodeOfALinkedList.ListNode;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem31_ReverseLinkedListTest {

    private final Problem31_ReverseLinkedList test = new Problem31_ReverseLinkedList();

    @Test
    void reverseList() {
        ListNode head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        head.next.next.next = new ListNode(4);
        head.next.next.next.next = new ListNode(5);

        assertEquals(5, test.reverseList(head).val);
    }
}