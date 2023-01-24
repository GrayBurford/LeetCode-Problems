/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    let hashMap = new Map();
    let ans = [];
    
    for (let arr of nums) {
        for (let num of arr) {
            hashMap.set(num, (hashMap.get(num) || 0) + 1)
        }
    }
    
    for (const [k, v] of hashMap) {
        if (v === nums.length) {
            ans.push(k)
        }
    }
    
    ans.sort((a, b) => a-b);
    return ans
};