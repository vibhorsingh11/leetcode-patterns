const mergeKLists = require('../../main/06-LinkedList/Problem09_MergeKSortedLists');

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

test('should return sorted list', () => {
  // Input: [1->4->5, 1->3->4, 2->6]
  // Output: 1->1->2->3->4->4->5->6
  const list1 = createLinkedList([1, 4, 5]);
  const list2 = createLinkedList([1, 3, 4]);
  const list3 = createLinkedList([2, 6]);
  const lists = [list1, list2, list3];

  const mergedList = mergeKLists(lists);

  expect(convertLinkedListToArray(mergedList)).toEqual([
    1, 1, 2, 3, 4, 4, 5, 6,
  ]);
});

function createLinkedList(arr) {
    if (arr.length === 0) return null;

    const head = new ListNode(arr[0]);
    let current = head;
  
    for (let i = 1; i < arr.length; i++) {
      current.next = new ListNode(arr[i]);
      current = current.next;
    }
  
    return head;
}

function convertLinkedListToArray(head) {
  const arr = [];

  let current = head;
  while (current !== null) {
    arr.push(current.val);
    current = current.next;
  }

  return arr;
}
