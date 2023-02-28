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

// Create closest variable starting with root node value
// Create difference variable to hold the difference between two 
// Use Math.abs() to find the difference between two node values
// Use Math.min() to see if current difference is less/greater than next comparison

