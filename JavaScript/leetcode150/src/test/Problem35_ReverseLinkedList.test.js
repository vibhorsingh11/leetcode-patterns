const reverseList = require('../main/Problem35_ReverseLinkedList');

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

test('should return reverse list', () => {
  const head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(3);
  head.next.next = new ListNode(4);
  head.next.next = new ListNode(5);

  expect(reverseList(head).val).toBe(5);
});
