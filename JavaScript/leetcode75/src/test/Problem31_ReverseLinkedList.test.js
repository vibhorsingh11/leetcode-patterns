const reverseList = require("../main/Problem31_ReverseLinkedList");

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

test("should return reverse list", () => {
  let list = new ListNode(1, 2);
  list.next = new ListNode(2, 3);
  list.next.next = new ListNode(3, 4);
  list.next.next.next = new ListNode(4, 5);
  expect(reverseList(list).val).toBe(5);
});
