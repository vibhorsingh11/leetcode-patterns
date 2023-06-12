const pathSum = require("../main/Problem36_PathSumIII");

//  Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

test("should return total paths possible", () => {
  let root = new TreeNode(10, 5, -3);
  root.left = new TreeNode(5, 3, 2);
  root.left.left = new TreeNode(3, 3, -2);
  root.right = new TreeNode(-3, null, 11);
  root.left.right = new TreeNode(2, null, 1);
  root.left.right.right = new TreeNode(1, null, null);

  expect(pathSum(root)).toBe(3);
});
