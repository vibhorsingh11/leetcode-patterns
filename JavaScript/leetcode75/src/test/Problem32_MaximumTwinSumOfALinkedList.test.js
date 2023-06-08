const pairSum = require("../main/Problem32_MaximumTwinSumOfALinkedList");

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

test("should return max twin sum", () => {
  let list = new ListNode(5, 4);
  list.next = new ListNode(4, 2);
  list.next.next = new ListNode(2, 1);
  expect(pairSum(list)).toBe(6);
});
