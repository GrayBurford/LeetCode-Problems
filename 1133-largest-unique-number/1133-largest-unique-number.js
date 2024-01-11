/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function(nums) {    
    let ans = 0;    
    let freqMap = new Map();
    
    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1)
    }
    
    for (const [key, val] of freqMap) {
        if (val === 1) {
            ans = Math.max(ans, key);
        }
    }
    
    return ans === 0
        ? -1
        : ans;
    
};




// initialize hash map
// fill map: map keys to each num with value being that num's frequency
// loop over map for keys whose values are 1
// push those keys into an answer array
// Math.max(...ans)



//     let freqMap = new Map();
//     let ans = [];
    
//     for (let num of nums) {
//         freqMap.set(num, (freqMap.get(num) || 0) + 1);
//     }
    
//     for (const [k, v] of freqMap) {
//         if (v === 1) {
//             ans.push(k);
//         }
//     }   
    
//     return !ans.length ? -1 : Math.max(...ans);
