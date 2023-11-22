/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode(0);
  let curr = dummy,
    carry = 0;
  while (l1 !== null || l2 != null || carry !== 0) {
    let first = l1 !== null ? l1.val : 0;
    let sec = l2 !== null ? l2.val : 0;
    let sum = carry + first + sec;
    carry = Math.floor(sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    l1 = l1.next;
    l2 = l2.next;
  }
  return dummy.next;
};

module.exports = addTwoNumbers;
