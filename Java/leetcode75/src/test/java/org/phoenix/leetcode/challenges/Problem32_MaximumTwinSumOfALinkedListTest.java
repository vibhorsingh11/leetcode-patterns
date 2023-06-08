package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;
import org.phoenix.leetcode.challenges.Problem29_DeleteTheMiddleNodeOfALinkedList.ListNode;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem32_MaximumTwinSumOfALinkedListTest {

    private final Problem32_MaximumTwinSumOfALinkedList test = new Problem32_MaximumTwinSumOfALinkedList();

    @Test
    void pairSum() {
        ListNode head = new ListNode(5);
        head.next = new ListNode(4);
        head.next.next = new ListNode(2);
        head.next.next.next = new ListNode(1);

        assertEquals(6, test.pairSum(head));
    }
}