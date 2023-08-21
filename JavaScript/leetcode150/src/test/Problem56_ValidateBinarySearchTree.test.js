const isValidBST = require('../main/Problem56_ValidateBinarySearchTree');

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

test('should return true if valid', () => {
  let root = new TreeNode(2);
  root.left = new TreeNode(1);
  root.right = new TreeNode(3);

  expect(isValidBST(root)).toBeTruthy();
});
