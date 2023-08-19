const isSameTree = require('../main/Problem50_SameTree');

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

test('should return true', () => {
  let root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);

  expect(isSameTree(root, root)).toBeTruthy();
});
