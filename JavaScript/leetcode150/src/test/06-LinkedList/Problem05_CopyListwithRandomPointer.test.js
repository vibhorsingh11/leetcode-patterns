const copyRandomList = require('../../main/06-LinkedList/Problem05_CopyListwithRandomPointer');

function ListNode(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}
test('should return deep copy list', () => {
  const head = new ListNode(1, null);
  head.next = new ListNode(2, head);
  head.next.next = new ListNode(3, head.next.next.next.next);
  head.next.next.next = new ListNode(4, head);
  head.next.next.next.next = new ListNode(5, head);

  //   expect(copyRandomList(head).val).toBe(1);
});
