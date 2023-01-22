/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let prefix = [nums[0]];
    let min = Infinity;
    let startVal = null;
    
    for (let i = 1; i < nums.length; i++) {
        prefix[i] = nums[i] + prefix[i - 1];
        if (prefix[i] < min) {
            min = prefix[i]
        }
    }
    
    if (prefix[0] < 0) {
        min = prefix[0] < min
                ? prefix[0]
                : min
    }
    
    startVal = min < 0
                ? Math.abs(min) + 1
                : 1
    
    return startVal;
};