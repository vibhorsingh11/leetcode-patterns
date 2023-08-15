/**
 * // Definition for a Node.
 */

function ListNode(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  let curr = head;
  while (curr) {
    let node = new ListNode(curr.val, curr.next);
    curr.next = node;
    curr = curr.next;
  }

  curr = head;
  while (curr) {
    if (curr.random) {
      curr.next.random = curr.random.next;
    }
    curr = curr.next.next;
  }

  let dummy = new ListNode(0);
  let copy = dummy;
  curr = head;
  while (curr) {
    copy.next = curr.next;
    curr.next = curr.next.next;
    curr = curr.next;
    copy.copy.next;
  }
  return dummy.next;
};

module.exports = copyRandomList;
