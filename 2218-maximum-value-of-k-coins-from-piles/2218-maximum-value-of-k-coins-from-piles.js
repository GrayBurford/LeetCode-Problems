/**
 * @param {number[][]} piles
 * @param {number} k
 * @return {number}
 */
var maxValueOfCoins = function(piles, k) {
    function dp (i, remain) {
        if (i === piles.length || remain === 0) {
            return 0;
        }
        
        if (memo[i][remain] !== -1) {
            return memo[i][remain];
        }
        
        let ans = dp(i + 1, remain); // Skip this pile
        let curr = 0;
        for (let j = 0; j < Math.min(remain, piles[i].length); j++) {
            curr += piles[i][j];
            ans = Math.max(ans, curr + dp(i + 1, remain - j - 1));
        }
        
        memo[i][remain] = ans;
        return ans;
    }
    
    let memo = [];
    for (let i = 0; i < piles.length; i++) {
        memo.push(new Array(k + 1).fill(-1));
    }
    
    return dp(0, k);
};


// You know the drill by now - we'll use a function dp that returns the most money we can take. We have our usual index variable i that can represent the current pile we are on, and the problem also has the explicit numerical constraint k, so we'll use another state variable remain that represents how many more coins we can take. So we have dp(i, remain) which returns the maximum value of coins we can take starting from the ith pile with remain moves remaining.

// At the ith pile, we can either skip the pile or take some coins. If we skip, then the score is dp(i + 1, remain). If we don't skip, we can choose how many coins to take. If we take coins up to the jth coin, then the score will be equal to the sum of piles[i][:j] plus dp(i + 1, remain - j - 1). We just need to make sure that we don't take more than remain coins.

// At every state, we need to try all possibilities. In a given state, we can use an integer variable curr to track the value of the coins we have taken from the current pile, then iterate over the pile and find the maximum score possible. The recurrence relation is:

// dp(i, remain) = max(skip, take), where

// skip = dp(i + 1, remain), and

// take = max( sum(piles[i][:j]) + dp(i + 1, remain - j - 1) for j from 0 to min(remain, piles[i].length) )

// This looks scary, but it becomes simpler when you look at each term on its own. sum(piles[i][:j]) is the value of the coins we have taken at the current pile, j + 1 is the number of coins we have taken, so that leaves us with remain - j - 1 moves, and min(remain, piles[i].length) is just to make sure that we don't take more coins than we are allowed to.

// What are our base cases? If we either reach the end of the input (no piles left) or remain = 0 (can't take any more coins), then the maximum score we can achieve is 0.
                                                                                                
// BOTTOM-UP:
// And the bottom-up solution, remember to iterate starting from the base cases i = n and remain = 0:
                                                                                        
// function maxValueOfCoins function(piles, k) {
//     let n = piles.length;
//     let dp = [];
//     for (let i = 0; i <= n; i++) {
//         dp.push(new Array(k + 1).fill(0));
//     }
    
//     for (let i = n - 1; i >= 0; i--) {
//         for (let remain = 1; remain <= k; remain++) {
//             dp[i][remain] = dp[i + 1][remain]; // skip this pile
//             let curr = 0;
//             for (let j = 0; j < Math.min(remain, piles[i].length); j++) {
//                 curr += piles[i][j];
//                 dp[i][remain] = Math.max(dp[i][remain], curr + dp[i + 1][remain - j - 1]);
//             } 
//         }
//     }
    
//     return dp[0][k];
// };


