// Next four directions.
let dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

// BFS function to do bfs starting from (row, col).
let bfs = (grid, row, col, totalHouses) => {
    let rows = grid.length;
    let cols = grid[0].length;
    let distanceSum = 0;
    let housesReached = 0;
    
    // Use a queue to do a bfs, starting from cell located at (row, col).
    let queue = [[ row, col ]];
    
    // Keep track of visited cells.
    let vis = new Array(rows).fill(false).map(() => new Array(cols).fill(false));
    vis[row][col] = true;
    
    let steps = 0;
    
    while (queue.length && housesReached != totalHouses) {
        // Record the cells that we will explore in the next level
        let next_queue = [];
        for (let i = 0; i < queue.length; i++) {
            let curr = queue[i];
            row = curr[0];
            col = curr[1];
            
            // If this cell is a house, then add the distance from source to this cell
            // and we go past from this cell.
            if (grid[row][col] == 1) {
                distanceSum += steps;
                housesReached++;
                continue;
            }
            
            // This cell was empty cell, hence traverse the next cells which is not a blockage.
            dirs.forEach((dir) => {
                let nextRow = row + dir[0];
                let nextCol = col + dir[1];
                if (nextRow >= 0 && nextCol >= 0 && nextRow < rows && nextCol < cols) {
                    if (!vis[nextRow][nextCol] && grid[nextRow][nextCol] != 2) {
                        vis[nextRow][nextCol] = true;
                        next_queue.push([nextRow, nextCol]);
                    }
                }
            });
        }
        
        // Set the queue equal to the next level queue.
        queue = next_queue;
        // After traversing one level cells, increment the steps by 1 to reach to next level.
        steps++;
    }
    
    // If we did not reach all houses, then any cell visited also cannot reach all houses.
    // Set all cells visted to 2 so we do not check them again and return MAX_VALUE.
    if (housesReached != totalHouses) {
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (grid[row][col] == 0 && vis[row][col]) {
                    grid[row][col] = 2;
                }
            }
        }
        return Number.MAX_VALUE;
    }
    
    // If we have reached all houses then return the total distance calculated.
    return distanceSum;
};

let shortestDistance = function (grid) {
    let minDistance = Number.MAX_VALUE;
    let rows = grid.length;
    let cols = grid[0].length;
    let totalHouses = 0;
    
    for (let row = 0; row < rows; ++row) {
        for (let col = 0; col < cols; ++col) {
            if (grid[row][col] == 1) {
                totalHouses++;
            }
        }
    }
    
    // Find the min distance sum for each empty cell.
    for (let row = 0; row < rows; ++row) {
        for (let col = 0; col < cols; ++col) {
            if (grid[row][col] == 0) {
                minDistance = Math.min(minDistance, bfs(grid, row, col, totalHouses));
            }
        }
    }
    
    // If it is impossible to reach all houses from any empty cell, then return -1.
    if (minDistance == Number.MAX_VALUE) {
        return -1;
    }
    return minDistance;
};

// Approach 1: BFS from Empty Land to All Houses
// Intuition

// Our goal is to find the empty land cell with the shortest total distance to all houses, so we must first find the shortest total distance to all houses from each empty land cell. As previously mentioned, this can be accomplished using BFS. For each empty cell (cell value equals 0) in the grid, start a BFS and sum all the distances to houses (cell value equals 1) from this cell. We will also keep track of the number of houses we have reached from this source cell (empty cell). If we cannot reach all the houses from the current empty cell, then it is not a valid empty cell. Furthermore, we can be certain that any cell visited during this BFS also cannot reach all of the houses. So we will mark all cells visited during this BFS as obstacles to ensure that we do not start another BFS from this region.

// Algorithm

// For each empty cell (grid[i][j] equals 0), start a BFS:
// In the BFS, traverse all 4-directionally adjacent cells that are not blocked or visited and keep track of the distance from the start cell. Each iteration adds 1 to the distance.
// Every time we reach a house, increment houses reached counter housesReached by 1, and increase the total distance distanceSum by the current distance (i.e., the distance from the start cell to the house).
// If housesReached equals totalHouses, then return the total distance.
// Otherwise, the starting cell (and every cell visited during this BFS) cannot reach all of the houses. So set every visited empty land cell equal to 2 so that we do not start a new BFS from that cell and return INT_MAX.
// Each time a total distance is returned from a BFS call, update the minimum distance (minDistance).
// If it is possible to reach all houses from any empty land cell, then return the minimum distance found. Otherwise, return -1.
