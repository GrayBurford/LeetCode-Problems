/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let map = new Map();
    map.set(0, 1);
    let curr = 0;
    let ans = 0;
    
    for (let num of nums) {
        curr += num % 2;
        ans += map.get(curr - k) || 0;
        map.set(curr, (map.get(curr) || 0) + 1);
    }
    
    return ans;
};