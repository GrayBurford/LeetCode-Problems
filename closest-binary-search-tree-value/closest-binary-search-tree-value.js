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
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    let closestVal = root.val;
    let minDiff = Infinity;
    
    function dfs(node, target) {
        if (!node) return;
        
        let currDiff = Math.abs(node.val - target);
        
        if (currDiff < minDiff) {
            minDiff = currDiff;
            closestVal = node.val;
        }
        
        if (target < node.val) {
            dfs(node.left, target);
        }
        if (target > node.val) {
            dfs(node.right, target);
        }
    }
    
    dfs(root, target);
    
    return closestVal;
};

// Create variable to hold closest value to target value, and variable to hold minimum difference between two node values
// Use dfs function to recursively call future nodes
// If node is null, return
// Find diff between target value and a node by taking abs value after subtracting them.
// If the difference is smaller than the global difference variable, update the difference variable with new value and the closestVal variable with the node's value that had a closer difference to target
// Use BST property to check which subtree to go into -- if target is less/greater than curr node.val, recursively call that subtree
// Call initial call to dfs function with root and target
// Return closest val variable
