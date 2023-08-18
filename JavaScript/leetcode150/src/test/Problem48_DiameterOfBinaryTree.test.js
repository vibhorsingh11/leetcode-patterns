const diameterOfBinaryTree = require('../main/Problem48_DiameterOfBinaryTree');

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

test('should return diameter of tree', () => {
  let root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right = new TreeNode(3);

  expect(diameterOfBinaryTree(root)).toBe(3);
});
