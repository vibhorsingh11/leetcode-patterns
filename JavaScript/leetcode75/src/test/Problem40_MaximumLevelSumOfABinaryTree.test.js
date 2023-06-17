const maxLevelSum = require("../main/Problem40_MaximumLevelSumOfABinaryTree");

//  Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

test("should return max level at which sum is greater", () => {
  let root = new TreeNode(1);
  root.left = new TreeNode(7);
  root.left.left = new TreeNode(7);
  root.left.right = new TreeNode(-8);
  root.right = new TreeNode(0);
  expect(maxLevelSum(root)).toBe(2);
});
