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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if (!root) {
        return new TreeNode(val);
    }
    
    function dfs(node, val) {
        if (val < node.val) {
            if (!node.left) {
                node.left = new TreeNode(val);
            } else {
                dfs(node.left, val);
            }
        }
        
        if (val > node.val) {
            if (!node.right) {
                node.right = new TreeNode(val);
            } else {
                dfs(node.right, val);
            }
        }
    }
    
    dfs(root, val);
    
    return root;
};

// base case, if no root passed in, create new TreeNode with input val and return
// Instantiate dfs helper function with binary search tree properties for recursion
// Check target value against root value
// If smaller, check if root.left exist. If not, set value as root.left
// If larger, check if root.right exists. If not, set value as root.right
// If root.left or right exists after logic check, re-call dfs with root.left or root.right and val (until leaf node is reached without a valid child for input val, then val will be set to that child)
// call initial dfs function with BST root and val
// problem calls for us to return original root