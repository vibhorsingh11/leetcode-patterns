const levelOrder = require('../main/Problem53_BinaryTreeLevelOrderTraversal');

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

test('should return level order', () => {
  let root = new TreeNode(3);
  root.left = new TreeNode(9);
  root.right = new TreeNode(20);
  root.right.left = new TreeNode(15);
  root.right.right = new TreeNode(7);

  expect(levelOrder(root)).toStrictEqual([[3], [9, 20], [15, 7]]);
});
