/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let dp = i => {
        if (memo[i] != -1) {
            return memo[i];
        }
        
        let ans = 1; // Base case
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                ans = Math.max(ans, dp(j) + 1);
            }
        }
        
        memo[i] = ans;
        return memo[i];
    }
    
    let memo = new Array(nums.length).fill(-1);
    let ans = 0;
    for (let i = 0; i < nums.length; i++) {
        ans = Math.max(ans, dp(i));
    }
    
    return ans;
};

// BOTTOM UP:
// var lengthOfLIS = function(nums) {
//     let dp = new Array(nums.length).fill(1);
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < i; j++) {
//             if (nums[i] > nums[j]) {
//                 dp[i] = Math.max(dp[i], dp[j] + 1);
//             }
//         }
//     }
    
//     return Math.max(...dp);
// };

// How can we tell that this problem should be solved with DP? First, it asks for a maximum length. Second, whenever we decide to take an element as part of a subsequence, it changes the numbers that we can take in the future. If we have nums = [1, 2, 5, 3, 4] and iterate from left to right, how do we decide if we should take the 5 or not? If we take it, our length increases which is what we want, but then it stops us from taking the 3 and 4.

// Step 1: figure out what the function should return and what variables it should take. The problem is asking for the longest increasing subsequence (LIS), so let's have the function return the length of the LIS. For state variables, the problem doesn't have any inputs other than nums, so let's just stick with an index variable i. We will have our function dp(i) return the LIS that ends with the ith element.

// If we are at the ith element, how can we leverage information about the previous states to figure out the LIS that uses the current element? First of all, we can only use the current element if the previous element was less than the current number. So we will only consider indices j in the range [0, i), where nums[i] > nums[j]. Because dp(j) returns the LIS that ends with the ith element, and nums[i] > nums[j], that means we can take whatever subsequence ends at j and just add nums[i] to it, giving us a length of dp(j) + 1. This gives us our recurrence relation:

// dp(i) = max(dp(j) + 1) for all j: [0, i), if nums[i] > nums[j]

// What are the base cases? Every element by itself is technically an increasing subsequence with length 1.

// By combining these three components, we can find the length of the LIS that ends at each index. The answer to the original problem will be the maximum of these.