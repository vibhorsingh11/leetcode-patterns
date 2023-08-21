const goodNodes = require('../main/Problem55_CountGoodNodesInBinaryTree');

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

test('should return good nodes', () => {
  let root = new TreeNode(3);
  root.left = new TreeNode(1);
  root.left.left = new TreeNode(3);
  root.right = new TreeNode(4);
  root.right.left = new TreeNode(1);
  root.right.right = new TreeNode(5);

  expect(goodNodes(root)).toBe(4);
});
