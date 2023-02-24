/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    
    function depthFirstSearch(node, curr) {
        if (!node) return false;

        if (!node.left && !node.right) {
            return curr + node.val === targetSum ? true : false;
        }

        curr = curr + node.val;

        let left = depthFirstSearch(node.left, curr);
        let right = depthFirstSearch(node.right, curr);
        return left || right;
    }
    
    return depthFirstSearch(root, 0);
};

