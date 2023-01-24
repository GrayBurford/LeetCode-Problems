/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function(nums) {
    let count = new Map();
    let ans = [];
    
    for (let num of nums) {
        count.set(num, (count.get(num) || 0) + 1);
    }
    console.log(count);
    
    for (const [k, v] of count) {
        if (v === 1) {
            ans.push(k);
        }
    }   
    
    return !ans.length ? -1 : Math.max(...ans);
};

// initialize hash map
// fill map: map keys to each num with value being that num's frequency
// loop over map for keys whose values are 1
// push those keys into an answer array
// Math.max(...ans)