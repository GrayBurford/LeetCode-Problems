/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
    function checkThreshold (divisor, nums, threshold) {
        let out = 0;
        for (let i = 0; i < nums.length; i++) {
            out += Math.ceil(nums[i]/divisor);
        }
        return out <= threshold;
    }
    
    let maxNum = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        maxNum = Math.max(maxNum, nums[i]);
    }
    
    let left = 1;
    let right = maxNum;
    
    while (left < right - 1) {
        let mid = Math.floor((left + right) / 2);
        let result = checkThreshold(mid, nums, threshold);
        
        if (result) {
            right = mid;
        } else {
            left = mid;
        }
    }
    
    if (checkThreshold(left, nums, threshold)) {
        return left;
    }
    
    return right;
};