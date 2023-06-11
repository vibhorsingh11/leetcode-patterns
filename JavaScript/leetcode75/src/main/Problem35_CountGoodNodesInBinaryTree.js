/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root) {
  return dfs(root, Number.MIN_VALUE);
};

let dfs = function (root, maxValue) {
  if (root == null) return 0;
  let goodNodes = root.val >= maxValue ? 1 : 0;
  goodNodes += dfs(root.left, Math.max(maxValue, root.val));
  goodNodes += dfs(root.right, Math.max(maxValue, root.val));
  return goodNodes;
};

module.exports = goodNodes;
