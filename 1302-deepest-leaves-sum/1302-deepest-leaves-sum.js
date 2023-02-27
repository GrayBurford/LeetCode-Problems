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
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    if (!root) null;
    
    let sum = 0;
    let queue = [root];

    while (queue.length) {
        let nodesInCurrentLevel = queue.length;
        let nextQueue = [];
        
        for (let i = 0; i < nodesInCurrentLevel; i++) {
            let node = queue[i];
            sum += node.val;
            
            if (node.left) {
                nextQueue.push(node.left);
            }
            if (node.right) {
                nextQueue.push(node.right);
            }
        }
        
        if (nextQueue.length) {
            sum = 0;
        }
        
        queue = nextQueue;      

    }
    
    return sum;
};

// Instantiate BFS general template
// Create sum variable
// During each loop of a level/row of nodes, add each node's value to sum variable
// After each for loop, check if nextQueue has length. If it does, reset sum to be 0. This is because any child nodes of the previous iteration would have been pushed into nextQueue.
// If it doesn't have a length, it means no child nodes were pushed into it during the last loop iteration, therefore is currently on the last level of leaves
// return sum