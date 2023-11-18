const mergeTwoLists = require('../../main/06-LinkedList/Problem02_MergeTwoSortedLists');

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

test('should return merged sort list', () => {
  const head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(4);

  const head2 = new ListNode(1);
  head2.next = new ListNode(3);
  head2.next.next = new ListNode(4);

  expect(mergeTwoLists(head, head2).next.val).toBe(1);
});
