const isSubtree = require('../main/Problem51_SubtreeOfAnotherTree');

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

test('should return is subtree exist', () => {
  let root = new TreeNode(3);
  root.left = new TreeNode(4);
  root.left.left = new TreeNode(1);
  root.left.right = new TreeNode(2);
  root.right = new TreeNode(5);

  let root1 = new TreeNode(4);
  root1.left = new TreeNode(1);
  root1.right = new TreeNode(2);

  expect(isSubtree(root, root1)).toBeTruthy();
});
