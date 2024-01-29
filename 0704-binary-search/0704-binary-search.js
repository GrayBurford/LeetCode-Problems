/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let L = 0;
    let R = nums.length - 1;
    let M;
    
    while (L <= R) {
        M = Math.floor((L + R) / 2);
        if (nums[M] === target) return M;
        if (nums[M] > target) {
            R = M - 1;
        }
        if (nums[M] < target) {
            L = M + 1;
        }
    }
    
    return -1;
};