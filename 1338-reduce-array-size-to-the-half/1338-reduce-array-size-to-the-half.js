/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    let ans = 0;
    let freqMap = new Map();
    let len = arr.length;
    const targetLength = Math.ceil(arr.length / 2);
    
    // populate freqMap
    for (let val of arr) {
        if (freqMap.get(val)) {
            freqMap.set(val, freqMap.get(val) + 1);
        } else {
            freqMap.set(val, 1);
        }
    }
    
    let values = Array.from(freqMap.values());
    values.sort((a,b) => a-b)
    
    while (len > targetLength) {
        let highestCurrVal = values.pop();
        len -= highestCurrVal;
        ans++;
    }
    
    return ans;
};
        
// problem states to choose integers one at a time to remove all frequencies of that integer from input array
// need to reduce array length by at least half
// need to choose the fewest integers to reduce array to at least half
// logically we want to choose values with highest frequency
// instantiate frequency map for each int: { int : freq, ... }
// sort freqmap values least->most frequent
// pop end value off array (most frequent), and -= array length by that value
// increment answer variable, and continue as long as array length is still > len/2
// return ans