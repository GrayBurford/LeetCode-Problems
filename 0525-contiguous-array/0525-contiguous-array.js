/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let counter = 0;
    let answer = 0;
    let freqMap = new Map();
    freqMap.set(0, -1);
    
    for (let i = 0; i < nums.length; i++) {
        counter += nums[i] === 0 
            ? -1 
            : 1;
        
        if (freqMap.has(counter)) {
            answer = Math.max(answer, i - freqMap.get(counter));
        } else {
            freqMap.set(counter, i);
        }
    }
    
    return answer;
};

// [0,1,0,1,0,0,1,1]
// {0 : -1, }