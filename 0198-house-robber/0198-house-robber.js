/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    function dp(i) {
        // base cases:
        if (i === 0) return nums[0];
        if (i === 1) return Math.max(nums[0], nums[1]);
        if (memo[i] !== -1) return memo[i];
        
        // recurrence relation
        memo[i] = Math.max(dp(i-1), dp(i-2) + nums[i]);
        return memo[i];
    }
    
    // prevents out of bounds error
    if (nums.length === 1) return nums[0];
    
    let memo = new Array(nums.length).fill(-1);
    return dp(nums.length - 1);
};

// First things first: what will our function return and what arguments will it take? The return value should be the maximum money that can be robbed since that is what the problem is asking for. What about state variables? We definitely need i - the maximum money that can be robbed if we only consider up to and including house i. Since we aren't allowed to rob the previous house, should we also include a boolean prev that indicates if we robbed the previous house? We certainly could include that - but it's not necessary.

// We can consider the case of having robbed the previous house in our recurrence relation. At house i, what choices do we have? There are two possibilities:

// We rob the house. This means we gain nums[i] money, but we cannot rob the previous house. If we need to skip the previous house, that means we must have arrived from 2 houses back. The amount of money we had 2 houses ago is dp(i - 2). Therefore, if we rob the ith house, we will have dp(i - 2) + nums[i] money.
// We don't rob the house. This means we don't gain any money, but we could have arrived from the previous house, which means we will have dp(i - 1) money.
// We should always choose the maximum profit. Therefore, our recurrence relation is dp(i) = max(dp(i - 1), dp(i - 2) + nums[i]).

// What are the base cases? If there is only one house, we may as well rob it. If there are two houses, we can only rob one, so we should rob the one with more money. The base cases are:

// dp(0) = nums[0] and dp(1) = max(nums[0], nums[1])

// We need two base cases because the recurrence on dp(1) would need dp(-1) if we didn't handle dp(1) as a base case.

// BOTTOM UP IMPLEMENTATION:
// var rob = function(nums) {
//     if (nums.length == 1) {
//         // to prevent out of bounds error
//         return nums[0];
//     }
    
//     let n = nums.length;
//     let dp = new Array(n).fill(0);
    
//     // Base cases
//     dp[0] = nums[0];
//     dp[1] = Math.max(nums[0], nums[1]);
    
//     for (let i = 2; i < n; i++) {
//         dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
//     }
    
//     return dp[n - 1];
// };

// IMPROVING SPACE COMPLEXITY:
// Actually, we can do better than O(n) space. When we are at state i, we only care about the previous two states. To get to state 100, we needed to go through 2 - 99, but once we're actually at 100, we don't care about 2 - 97. In the bottom-up implementation, we can replace the array with two variables that just keep track of the previous two states. arr[0] becomes obsolete once we get to arr[3] etc.

// var rob = function(nums) {
//     if (nums.length == 1) {
//         // to prevent out of bounds error
//         return nums[0];
//     }
    
//     let n = nums.length;
    
//     // Base cases
//     let backTwo = nums[0];
//     let backOne = Math.max(nums[0], nums[1]);
    
//     for (let i = 2; i < n; i++) {
//         let temp = backOne;
//         backOne = Math.max(backOne, backTwo + nums[i]);
//         backTwo = temp;
//     }
    
//     return backOne;
// };

// This algorithm has the same time complexity, but an O(1) space complexity