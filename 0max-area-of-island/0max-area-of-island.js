/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    if (!grid) return;
    
    let max = 0;
    let curr = 0;
    
    // DFS helper function
    function dfs(i, j) {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) {
            return;
        }
        
        if (grid[i][j] !== 1) {
            return;
        }
        
        curr++;
        grid[i][j] = false;
        
        // 4-directional movement
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    }
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                dfs(i, j);
                max = Math.max(max, curr);
                curr = 0;
            }
        }
    }
    
    return max;
};