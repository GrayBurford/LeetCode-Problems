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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    if (!root) return 0;
    let answer = 0;
    
    if (low <= root.val && root.val <= high) {
        answer += root.val;    
    }
    
    if (root.val > low) {
        answer += rangeSumBST(root.left, low, high);
    }
    if (root.val < high) {
        answer += rangeSumBST(root.right, low, high);
    }
    
    return answer;
};

// Base base, if not root, return 0 (no sum)
// instantiate global answer variable
// Use recursion to answer each subproblem, which will return the answer to the original problem, treating each function call like a black box
// Check node (root) against low/high variables. If valid, add value
// ***Use property of Binary Search Tree here (left nodes are less than root; right nodes are greater than root)
// If root's value is greater than low variable, there may be valid values below in the left subtree
// If root's value is less than high variable, there also may be valid values below in the right subtree
// Use if statements to check these conditions, and if algorithm reaches inside, recursively call originally function on that left/right node, adding value to global answer variable
// return answer sum