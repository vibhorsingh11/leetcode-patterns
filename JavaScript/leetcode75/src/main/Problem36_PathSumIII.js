/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, sum) {
  if (root == null) return 0;
  return pathSum(root.left, sum) + pathSum(root.right, sum) + helper(root, sum);
};

function helper(root, sum, count) {
  if (root == null) return 0;
  var count = 0;
  if (sum == root.val) {
    count++;
  }
  count += helper(root.left, sum - root.val);
  count += helper(root.right, sum - root.val);
  return count;
}

module.exports = pathSum;
