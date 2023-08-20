const lowestCommonAncestor = require('../main/Problem52_LowestCommonAncestorOfABinarySearchTree');

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

test('should return is subtree exist', () => {
  let root = new TreeNode(6);
  root.left = new TreeNode(2);
  root.left.left = new TreeNode(0);
  root.left.right = new TreeNode(4);
  root.left.right.left = new TreeNode(3);
  root.left.right.right = new TreeNode(5);
  root.right = new TreeNode(8);
  root.right.left = new TreeNode(7);
  root.right.right = new TreeNode(9);

  expect(lowestCommonAncestor(root, 2, 8).val).toBe(6);
});
