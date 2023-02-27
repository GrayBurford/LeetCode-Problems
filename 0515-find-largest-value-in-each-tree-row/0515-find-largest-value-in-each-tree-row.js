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
 * @return {number[]}
 */
var largestValues = function(root) {
    if (!root) return [];
    
    let queue = [root];
    let answer = [];
    
    while (queue.length) {
        let nodesInCurrentLevel = queue.length;
        let nextQueue = [];
        
        let currMax = -Infinity;

        for (let i = 0; i < nodesInCurrentLevel; i++) {
            let node = queue[i];
            currMax = Math.max(currMax, node.val)

            if (node.left) {
                nextQueue.push(node.left);
            }
            
            if (node.right) {
                nextQueue.push(node.right);
            }
        }
        
        answer.push(currMax);
        queue = nextQueue;
    }
    
    return answer;

};

// Base case if no root. Initialize queue with root, and answer array
// While loop runs as long as there are still nodes to be visited (queue.length)
// Initialize nextQueue inside while loop which we'll set queue to be equal to after for loop
// Initialize current max value here -- will update using each node's value from this current "row"
// For loop runs for the length of the current row (current queue.length)
// Check each node's value against current Max variable with Math.max
// Still in for loop, add node's left/right children to next queue, if exists
// For loop finishes current row of nodes, then push the then current max to answer array
// Set queue to be nextQueue we just actively built with previous row node's children
// while loop starts again until all nodes visited
// return answer array