/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    function dp (row, col) {
        if (row + col === 0) {
            return grid[row][col];
        }
        
        if (memo[row][col] !== -1) {
            return memo[row][col];
        }
        
        let ans = Infinity;
        
        if (row > 0) {
            ans = Math.min(ans, dp(row - 1, col));
        }
        
        if (col > 0) {
            ans = Math.min(ans, dp(row, col - 1));
        }
        
        memo[row][col] = grid[row][col] + ans;
        
        return memo[row][col];
    }
    
    let m = grid.length, n = grid[0].length;
    
    let memo = [];
    
    for (let i = 0; i < m; i++) {
        memo.push(new Array(n).fill(-1));
    }
    
    return dp(m - 1, n - 1);
};

// Let's have dp(row, col) return the minimum path sum to get from (0, 0) to (row, col). Then, the answer is once again dp(m - 1, n - 1). If we are at (row, col), we must have arrived from (row - 1, col) or (row, col - 1). Therefore, before reaching row, col we either had a sum of dp(row - 1, col) or dp(row, col - 1) already. By being at (row, col), we are also adding grid[row][col] to our current sum. Therefore, we have a recurrence of:

// dp(row, col) = grid[row][col] + min(dp(row - 1, col), dp(row, col - 1)), making sure to stay in bounds.

// The base case is again the starting square. We start at (0, 0) with a path sum of grid[0][0].

// BOTTOM-UP:
// var minPathSum = function(grid) {
//     let m = grid.length, n = grid[0].length;
//     let dp = [];
//     for (let i = 0; i < m; i++) {
//         dp.push(new Array(n).fill(0));
//     }
//     dp[0][0] = grid[0][0];
    
//     for (let row = 0; row < m; row++) {
//         for (let col = 0; col < n; col++) {
//             if (row + col == 0) {
//                 continue;
//             }
            
//             let ans = Infinity;
//             if (row > 0) {
//                 ans = Math.min(ans, dp[row - 1][col]);
//             }
//             if (col > 0) {
//                 ans = Math.min(ans, dp[row][col - 1]);
//             }
            
//             dp[row][col] = grid[row][col] + ans;
//         }
//     }
    
//     return dp[m - 1][n - 1];
// };

// The situation of the time and space complexity is the exact same for both examples. It is O(m⋅n), but we can improve to O(n) using bottom-up since we are iterating row by row:

// var minPathSum = function(grid) {
//     let m = grid.length, n = grid[0].length;
//     let dp = new Array(n).fill(Infinity);
//     dp[0] = 0;
    
//     for (let row = 0; row < m; row++) {
//         let nextRow = new Array(n).fill(0);
//         for (let col = 0; col < n; col++) {
//             nextRow[col] = dp[col];
//             if (col > 0) {
//                 nextRow[col] = Math.min(nextRow[col], nextRow[col - 1]);
//             }
            
//             nextRow[col] += grid[row][col];
//         }
        
//         dp = nextRow;
//     }
    
//     return dp[n - 1];
// };

