/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  let arr1 = [];
  let arr2 = [];
  dfs(root1, arr1);
  dfs(root2, arr2);
  return arr1.toString() === arr2.toString();
};

var dfs = function (root, arr) {
  if (root === null) return;
  if (!root.left && !root.right) {
    arr.push(root.val);
  }
  dfs(root.left, arr);
  dfs(root.right, arr);
};

module.exports = leafSimilar;
