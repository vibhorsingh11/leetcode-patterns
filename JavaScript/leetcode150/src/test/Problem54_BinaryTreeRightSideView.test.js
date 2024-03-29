const rightSideView = require('../main/Problem54_BinaryTreeRightSideView');

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

test('should return right side nodes', () => {
  let root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.left.right = new TreeNode(5);
  root.right = new TreeNode(3);
  root.right.right = new TreeNode(4);

  expect(rightSideView(root)).toStrictEqual([1, 3, 4]);
});
