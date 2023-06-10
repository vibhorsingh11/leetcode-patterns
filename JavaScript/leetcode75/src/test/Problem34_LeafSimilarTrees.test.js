const leafSimilar = require("../main/Problem34_LeafSimilarTrees");

//  Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

test("should return if leaf are similar for both tree", () => {
  let root1 = new TreeNode(1, 2, 3);
  root1.left = new TreeNode(2, null, null);
  root1.right = new TreeNode(3, null, null);

  let root2 = new TreeNode(1, 3, 2);
  root2.left = new TreeNode(3, null, null);
  root2.right = new TreeNode(2, null, null);

  expect(leafSimilar(root1, root2)).toBe(false);
});
