/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    let freqMap = new Map();
    
    // populate frequency map
    for (let num of arr) {
        if (freqMap.get(num)) {
            freqMap.set(num, freqMap.get(num) + 1);
        } else {
            freqMap.set(num, 1);
        }
    }
    
    // instantiate sorted array of freqMap values
    const onlyVals = Array.from(freqMap.values())    
    const sortedVals = onlyVals.sort((a,b) => b-a)
    console.table(sortedVals)
    
    while (k > 0) {
        let curr = sortedVals[sortedVals.length - 1];
        if (curr <= k) {
            k -= curr;
            sortedVals.pop();
        } else {
            break;
        }
    }
    
    return sortedVals.length;  
    
};

// use hash map to calculate frequency of each int
// to end with least unique integers, need to remove as many of the lowest frequency ints as k will allow
// sort keys of freqmap and interate through keys starting with least frequent
// at each key, if frequency is <= k, remove that key and decrease k by the count
// continue until we run out of removals
// number of keys at the end is the answer