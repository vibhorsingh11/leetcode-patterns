const kthSmallest = require('../main/Problem57_KthSmallestElementInABST');

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

test('should return kth smallest', () => {
  let root = new TreeNode(3);
  root.left = new TreeNode(1);
  root.left.right = new TreeNode(2);
  root.right = new TreeNode(4);

  expect(kthSmallest(root, 1)).toBe(1);
});
