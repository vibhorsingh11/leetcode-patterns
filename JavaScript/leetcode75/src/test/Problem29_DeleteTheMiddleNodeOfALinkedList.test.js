const deleteMiddle = require("../main/Problem29_DeleteTheMiddleNodeOfALinkedList");

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

test("should return list without middle", () => {
  let list = new ListNode(1, 3);
  list.next = new ListNode(3, 4);
  list.next.next = new ListNode(4, 7);
  list.next.next.next = new ListNode(7, 1);
  list.next.next.next.next = new ListNode(1, 2);
  list.next.next.next.next.next = new ListNode(2, 6);
  expect(deleteMiddle(list).next.next.next.val).toBe(1);
});
