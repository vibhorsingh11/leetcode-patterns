/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  let max = root.val;
  //return max path without split
  function helper(root) {
    if (root === null) return 0;

    let left = Math.max(helper(root.left), 0);
    let right = Math.max(helper(root.right), 0);
    //max path sume with split
    max = Math.max(max, root.val + left + right);

    return root.val + Math.max(left, right);
  }
  helper(root);
  return max;
};

module.exports = maxPathSum;
