/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let hashMap = new Map();
    hashMap.set(0, 1);
    let ans = 0;
    let curr = 0;
    
    for (const num of nums) {
        curr += num;
        ans += hashMap.get(curr - k) || 0;
        hashMap.set(curr, (hashMap.get(curr) || 0) + 1);
    }
    return ans;
};