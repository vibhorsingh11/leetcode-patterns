const invertTree = require('../main/Problem46_InvertBinaryTree');

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

test('should return inverted tree', () => {
  let root = new TreeNode(4);
  root.left = new TreeNode(2);
  root.left.left = new TreeNode(1);
  root.left.right = new TreeNode(3);
  root.right = new TreeNode(7);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(9);

  expect(invertTree(root).left.val).toBe(7);
});
