const oddEvenList = require("../main/Problem30_OddEvenLinkedList");

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

test("should return odd list before even", () => {
  let list = new ListNode(1, 2);
  list.next = new ListNode(2, 3);
  list.next.next = new ListNode(3, 4);
  list.next.next.next = new ListNode(4, 5);
  expect(oddEvenList(list).next.val).toBe(3);
});
