const removeNthFromEnd = require('../main/Problem38_RemoveNthNodeFromEndOfList');

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

test('should remove nth node from end', () => {
  const head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(3);
  head.next.next.next = new ListNode(4);
  head.next.next.next.next = new ListNode(5);

  removeNthFromEnd(head, 2);

  expect(head.next.next.next.val).toBe(5);
});
