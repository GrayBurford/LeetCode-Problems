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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) return [];
    
    let queue = [root];
    let answer = [];
    let counter = 0;
    
    while (queue.length) {
        let numNodesInCurrLevel = queue.length;
        let nextQueue = [];
        let currLevel = [];
        
        for (let i = 0; i < numNodesInCurrLevel; i++) {
            let node = queue[i]; 
            
            if (counter % 2 === 0) {
                currLevel.push(node.val);
            } else {
                currLevel.unshift(node.val);
            }
            
            if (node.left) {
                nextQueue.push(node.left);
            }
            
            if (node.right) {
                nextQueue.push(node.right);
            }
            
        }
        
        counter++;
        answer.push(currLevel);        
        queue = nextQueue;
    }
    
    return answer;
};

// Instantiate basic BFS queue template;
// If no root, return empty array
// Queue array starts with root node; answer array starts empty
// Declare counter variable to increment by 1 every level/row of the tree so logic can check if odd/even
// Loop over nodes in queue, and while counter is odd, push values into new array
// If counter is odd, unshift values into new array
// After each for loop, push current level array node values into final answer array, and increment counter++
// While looping, logic check for each node's possible children, if there are any, push them onto nextQueue
// After every for loop, reset queue to equal nextQueue (which holds all children for next level)
// Return answer