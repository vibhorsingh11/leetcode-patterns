const reorderList = require('../../main/06-LinkedList/Problem03_ReorderList');

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

test('should return reordered list', () => {
  const head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(3);
  head.next.next.next = new ListNode(4);

  reorderList(head);

  expect(head.val).toBe(1);
  expect(head.next.val).toBe(4);
  expect(head.next.next.val).toBe(2);
  expect(head.next.next.next.val).toBe(3);
  expect(head.next.next.next.next).toBeNull();
});
