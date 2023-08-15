const addTwoNumbers = require('../main/Problem40_AddTwoNumbers');

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

test('should return the sum of 2 number', () => {
  const head = new ListNode(2);
  head.next = new ListNode(4);
  head.next.next = new ListNode(3);

  const head2 = new ListNode(5);
  head2.next = new ListNode(6);
  head2.next.next = new ListNode(4);

  expect(addTwoNumbers(head, head2).val).toBe(7);
  expect(addTwoNumbers(head, head2).next.val).toBe(0);
});
