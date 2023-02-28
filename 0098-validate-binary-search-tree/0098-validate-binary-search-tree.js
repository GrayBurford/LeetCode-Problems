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
 * @return {boolean}
 */
var isValidBST = function(root) {
    if (!root) return true;
    
    function dfs(node, low, high) {
        if (!node) return true;
        
        if (node.val <= low) return false;
        if (node.val >= high) return false;
        
        let left = dfs(node.left, low, node.val);
        let right = dfs(node.right, node.val, high);
        
        return left && right;
    }
    
    return dfs(root, -Infinity, Infinity);
};

// An empty node is technically a valid BST, so return true for this as base case.
// DFS helper function takes root node, and lowest and highest possible values to start
// Every call to dfs needs to have updated values of low/high to maintain the integrity of the BST property (left subtree being all less than the root; right subtree being all greater than the root)
// Start with -inf, +inf. When we go left, we know left.val needs to be betweeen -inf, root.val
// Similarly, if we go right, we know right.val needs to be between root.val and +inf
// Calling recursively on a left subtree needs to update the higher bounds (high/large variable) to the parent/current node's value, since to be a valid BST, it can't be greater. Similarly with the right subtree and updating the lower bounds to node's value.
// Make sure and return left AND right inside dfs function, since both subtrees need to be valid, not just one.
// Call original function with root, -inf, inf