/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists === null || lists.length === 0) return null;

  return mergeSort(lists, 0, lists.length - 1);
};

function mergeSort(lists, left, right) {
  if (left === right) return lists[left];
  let mid = left + Math.floor((right - left) / 2);

  let start = mergeSort(lists, left, mid);
  let end = mergeSort(lists, mid + 1, right);
  return merge(start, end);
}

function merge(left, right) {
  let dummy = new ListNode(0);
  let curr = dummy;
  while (left && right) {
    if (left.val < right.val) {
      curr.next = left;
      left = left.next;
    } else {
      curr.next = right;
      right = right.next;
    }
    curr = curr.next;
  }
  while (left) {
    curr.next = left;
    curr = curr.next;
    left = left.next;
  }
  while (right) {
    curr.next = right;
    curr = curr.next;
    right = right.next;
  }
  return dummy.next;
}

module.exports = mergeKLists;
