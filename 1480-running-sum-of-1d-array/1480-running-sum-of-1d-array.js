/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    // let out = [];
    // let total = 0;
    // for (let num of nums) {
    //     total += num;
    //     out.push(total);
    // }
    // return out;
    
    let out = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        out[i] = nums[i] + out[i-1];
    }
    return out;
};