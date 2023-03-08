/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    function isValid(row, col) {
        return 0 <= row && row < m && 0 <= col && col < n && mat[row][col] === 1;
    }
    
    const m = mat.length;
    const n = mat[0].length;
    let queue = [];
    let seen = [];
    
    for (let i = 0; i < m; i++) {
        seen.push(new Array(n).fill(false));
    }
    
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (mat[row][col] === 0) {
                queue.push([row, col]);
                seen[row][col] = true;
            }
        }
    }
    
    const directions = [[0,1], [1,0], [0,-1], [-1,0]];
    let steps = 0;
    
    while (queue.length) {
        let currLen = queue.length;
        let nextQueue = [];
        steps++;
        
        for (let i = 0; i < currLen; i++) {
            const [row, col] = queue[i];
            
            for (const [dx, dy] of directions) {
                let nextRow = row + dy;
                let nextCol = col + dx;
                
                if (isValid(nextRow, nextCol) && !seen[nextRow][nextCol]) {
                    seen[nextRow][nextCol] = true;
                    nextQueue.push([nextRow, nextCol]);
                    mat[nextRow][nextCol] = steps;
                }
            }
        }
        
        queue = nextQueue;
    }
    
    return mat;
};

// Declare variables to get size of matrix, m and n, queue, and seen array
// Iterate over matrix to find all 0s to put into our queue, instead of 1s
// Append row, col, and "steps" to queue which will be iterated +1 each level
// declare 4 cardinal directions
// Define helper function to check whether a row & col are in bounds of the matrix (0 <= row < m && 0 <= col < n)
// Run BFS using while loop on queue, get row, col, and steps from next in queue
// 