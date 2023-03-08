/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function(grid, k) {
    function isValid (row, col) {
        return 0 <= row && row < m && 0 <= col && col < n;
    }
    
    const m = grid.length;
    const n = grid[0].length;
    let queue = [[0,0,k]];
    let seen = [];
    
    for (let i = 0; i < m; i++) {
        seen.push([]);
        for (let j = 0; j < n; j++) {
            seen[i].push(new Array(k+1).fill(-1));
        }
    }
    
    const directions = [[0,1], [1,0], [0,-1], [-1,0]];
    let steps = 0;
    
    while (queue.length) {
        let currLen = queue.length;
        let nextQueue = [];
        
        for (let i = 0; i < currLen; i++) {
            let [row, col, remain] = queue[i];
            if (row === m - 1 && col === n - 1) {
                return steps;
            }
            
            // if current square is an obstacle, need to spend one of our removals
            if (grid[row][col] === 1) {
                if (remain === 0) {
                    continue;
                } else {
                    remain--;
                }
            }
            
            // if square has already been visited, but with more removals, then curr path is pointless since more                       removals is better
            if (seen[row][col] >= remain) {
                continue;
            }
            
            seen[row][col] = remain;
            for (const [dx, dy] of directions) {
                let nextRow = row + dy;
                let nextCol = col + dx;
                
                if (isValid(nextRow, nextCol)) {
                    nextQueue.push([nextRow, nextCol, remain]);
                }
            }
        }
        
        queue = nextQueue;
        steps++;
    }
    
    return -1;
};

// Starting at top left square. Have k num of removals
// Don't want to visit a node more than once. Treat a node as more than just a square, but in combination of how many removals we have remaining
// with BFS can treat each node as part of a level
// Declare starting variables, m and n, queue, and seen
// Make helper function to check if a row, col set is in bounds of matrix
// Directions array to iterate over a node's neighbors cleanly
// As previously mentioned, the time complexity is the number of states multiplied by the work done at each state. There are m * n squares, and we also have a state variable remain which ranges from [0, k]. The work done at each state is O(1), which gives us a time complexity of O(m⋅n⋅k). The space complexity is the same, as seen grows linearly with the number of states.