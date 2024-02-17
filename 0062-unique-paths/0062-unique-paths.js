/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    function dp (row, col) {
        // BASE CASE
        if (row + col === 0) return 1;
        
        if (memo[row][col] !== -1) {
            return memo[row][col];
        }
        
        let ways = 0;
        
        if (row > 0) {
            ways += dp(row - 1, col);
        }
        if (col > 0) {
            ways += dp(row, col - 1);
        }
        
        memo[row][col] = ways;
        
        return ways;
    }
    
    let memo = [];
    
    for (let i = 0; i < m; i++) {
        memo.push(new Array(n).fill(-1));
    }
    
    return dp(m - 1, n - 1);
};

// As expected when using the framework, we can have a function dp return the number of unique paths. What variables do we need to describe a state? We just need to know our position - let's say row and col. So dp(row, col) will return the number of paths that can be used to reach (row, col) from (0, 0). We want to reach the bottom right, which is (m - 1, n - 1), so the answer is dp(m - 1, n - 1).

// If we are at (row, col), how could we have gotten here? We are only allowed to move down or right, so we must have arrived from either the left or up. The square above us is row - 1, col and the square to the left of us is row, col - 1. Therefore, the number of ways to reach row, col is the sum of the number of ways to reach row - 1, col and row, col - 1.

// This gives us our recurrence relation:

// dp(row, col) = dp(row - 1, col) + dp(row, col - 1), making sure to stay in bounds

// What is the base case? There is only one "way" to get to (0, 0) - by starting there. The base case is:

// dp(0, 0) = 1

// BOTTOM UP:
// var uniquePaths = function(m, n) {
//     let dp = [];
//     for (let i = 0; i < m; i++) {
//         dp.push(new Array(n).fill(0));
//     }
    
//     dp[0][0] = 1
//     for (let row = 0; row < m; row++) {
//         for (let col = 0; col < n; col++) {
//             if (row > 0) {
//                 dp[row][col] += dp[row - 1][col];
//             }
//             if (col > 0) {
//                 dp[row][col] += dp[row][col - 1];
//             }
//         }
//     }
    
//     return dp[m - 1][n - 1];
// };