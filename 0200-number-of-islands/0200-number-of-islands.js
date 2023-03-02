/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    
    function isValid(row, col) {
        if (0 <= row 
            && row < m 
            && 0 <= col 
            && col < n 
            && grid[row][col] == "1"
           ) {
            return true;
        }
        return false;
    }
    
    
    function dfs(row, col) {
        for (const [dx, dy] of directions) {
            let nextRow = row + dy;
            let nextCol = col + dx;
            if (isValid(nextRow, nextCol) && !seen[nextRow][nextCol]) {
                seen[nextRow][nextCol] = true;
                dfs(nextRow, nextCol);
            }
        }    
    }
    
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let m = grid.length;
    let n = grid[0].length;
    let seen = [];
    
    for (let i = 0; i < m; i++) {
        seen.push(new Array(n).fill(false));
    }
    
    let answer = 0;
    
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (grid[row][col] === '1' && !seen[row][col]) {
                answer++;
                seen[row][col] = true;
                dfs(row, col);
            }
        }
    }
    
    return answer;
};