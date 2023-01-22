/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    let prefix = [nums[0]];
    let validSplits = 0;
    
    // build prefix sum array
    for (let i = 1; i < nums.length; i++) {
        prefix[i] = nums[i] + prefix[i - 1];
        // prefix.push(nums[i] + prefix[prefix.length - 1]);
    }
    
    for (let i = 0; i < prefix.length - 1; i++) { // not <= length - 1 (need right section to have at least 1 value)
        let left = prefix[i];
        let right = prefix[prefix.length - 1] - prefix[i]; //difference between left and right
        if (left >= right) {
            validSplits++;
        }
    }
    
    return validSplits;
};