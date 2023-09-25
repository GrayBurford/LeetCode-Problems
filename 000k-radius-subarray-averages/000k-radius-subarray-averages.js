/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {
    let avgs = [];
    let prefix = [nums[0]];
    // nums = [7,4,3,9,1,8,5,2,6]
    // prefix = [7,11,14,23,24,32,37,39,45]
    
    // build prefix sum array
    for (let i = 1; i < nums.length; i++) {
        prefix.push(nums[i] + prefix[i-1]);
    }
    
        
    function subArrayAverageFromIndex (index) {
        if (index - k < 0 || index + k >= prefix.length) {
            return -1;
        }
        
        let subArraySum = index - k === 0
            ? prefix[index + k]
            : prefix[index + k] - prefix[index - k - 1];
        let subArrayLength = (index + k) - (index - k - 1);
        
        return Math.floor(subArraySum/subArrayLength);
    }
    
    // build avgs array -- Floored average of subarray around index i.
    for (let i = 0; i < prefix.length; i++) {
        avgs[i] = subArrayAverageFromIndex(i);
    }
    
    return avgs;
    
};

