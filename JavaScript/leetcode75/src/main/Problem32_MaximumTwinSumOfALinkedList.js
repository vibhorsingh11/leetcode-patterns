/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  if (head == null) {
    return 0;
  }
  let slow = head,
    fast = head;
  // Finding the middle node for reversing the half
  while (fast != null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  // Reversing the rest half of the list
  let prev = null,
    nextNode;
  while (slow != null) {
    nextNode = slow.next;
    slow.next = prev;
    prev = slow;
    slow = nextNode;
  }
  let maxSum = 0;
  //To check the twin sum taking the head
  //comparing the max sum and updating
  let start = head;
  while (prev != null) {
    console.log(start.val);
    console.log(prev);
    maxSum = Math.max(maxSum, start.val + (prev));
    prev = prev.next;
    start = start.next;
  }
  return maxSum;
};

module.exports = pairSum;
