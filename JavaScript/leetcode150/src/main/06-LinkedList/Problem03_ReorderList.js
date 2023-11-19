/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (!head || !head.next) return;

  // find the middle point
  let slow = head,
    fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // split into two part head & part2
  let part2 = slow.next;
  slow.next = null;

  // reverse part 2
  let prev = null,
    cur = part2,
    next = cur.next;
  while (cur) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  part2 = prev;

  // merge head & part2
  while (head && part2) {
    let p1 = head.next;
    let p2 = part2.next;
    head.next = part2;
    head.next.next = p1;
    part2 = p2;
    head = p1;
  }
  return head;
};

module.exports = reorderList;
