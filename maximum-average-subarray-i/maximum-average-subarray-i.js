/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let maxValue = 0;
    let current = 0;
    
    for (let i = 0; i < k; i++) {
        current += nums[i];
    }
    
    maxValue = current;
    for (let i = k; i < nums.length; i++) {
        current = current + nums[i] - nums[i - k];
        maxValue = Math.max(maxValue, current);
    }
    
    return maxValue/k;
};