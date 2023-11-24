const hasCycle = require('../../main/06-LinkedList/Problem07_LinkedListCycle');

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

test('should check is cycle exist', () => {
  const head = new ListNode(3);
  head.next = new ListNode(2);
  head.next.next = new ListNode(0);
  head.next.next.next = new ListNode(-4);
  head.next.next.next.next = head.next;

  expect(hasCycle(head, 1)).toBeTruthy();
});
