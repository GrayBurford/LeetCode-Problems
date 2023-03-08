/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    function valid (row, col) {
        return 0 <= row
            && row < n
            && 0 <= col
            && col < n
            && grid[row][col] === 0;
    }
    
    // Must start on a 0; no clear path
    if (grid[0][0] === 1) {
        return -1;
    }
    
    let n = grid.length;
    let seen = [];
    
    // Populate seen array with nested arrays of length n with starting false values
    for (let i = 0; i < n; i++) {
        seen.push(new Array(n).fill(false));
    }
    // starting point set to true
    seen[0][0] === true;
    
    let queue = [[0, 0]]; // row, col pairs
    let steps = 0;
    let directions = [[0, 1], [1, 0], [1, 1], [-1, -1], [-1, 1], [1, -1], [0, -1], [-1, 0]];
    
    while (queue.length) {
        let currLen = queue.length;
        let nextQueue = [];
        steps++;
        
        for (let i = 0; i < currLen; i++) {
            let [row, col] = queue[i];
            
            // end case; hit bottom-right corner if grid
            if (row === n-1 && col === n-1) {
                return steps;
            }
            
            for (const [dx, dy] of directions) {
                let nextRow = row + dy;
                let nextCol = col + dx;
                
                if (valid(nextRow, nextCol) && !seen[nextRow][nextCol]) {
                    seen[nextRow][nextCol] = true;
                    nextQueue.push([nextRow, nextCol]);
                }
            }
        }
        
        queue = nextQueue;
    }
    
    // if we never reach last square (bottom-right of grid), while loop exists queue and we know there is no valid path
    return -1;
};
// If the queue implementation is efficient, then removing from the left is O(1) which makes the work at each node O(1). This means the time complexity is equal to the number of nodes, which is O(n^2). The space complexity is also O(n^2) as seen can grow to that size.
// The steps taken to implement BFS are very similar to DFS. At each node, do some logic, then iterate over the neighbors (in this case, the 8 directions), check if the neighbor is in seen, and if it isn't, add it to seen and the queue. The main difference is that we are using a queue instead of a stack.
