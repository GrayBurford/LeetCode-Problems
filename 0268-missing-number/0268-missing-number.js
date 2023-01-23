/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let hashMap = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        hashMap.set(num, i);
    }    
    
    for (let i = 0; i <= nums.length; i++) {
        if (hashMap.get(i) === undefined) {
            return i;
        }
    }
}