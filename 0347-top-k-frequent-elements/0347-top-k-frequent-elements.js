/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let freqMap = getFreqCounter(nums);
    let bucket = [];
    let output = [];
    
    // for (let i = 0; i < nums.length; i++) {
    //     bucket[i] = [];
    // }
    bucket = Array.from(Array(nums.length + 1), () => []);
        
    for (let [k,v] of freqMap.entries()) {
        bucket[v].push(k);
    }
    
    for (let i = bucket.length - 1; i >= 0; i--) {
        for (let val of bucket[i]) {
            output.push(val);
            if (output.length === k) return output;
        }
    }

};

function getFreqCounter (array) {
    let freqMap = new Map();
    for (let num of array) {
        if (freqMap.get(num) === undefined) {
            freqMap.set(num, 1);
        } else {
            freqMap.set(num, freqMap.get(num) + 1);
        }
    }
    
    return freqMap;
}

// Loop over input array and add each unique value as a key with value/frequency 1
// If input value already exists in hash map, incremenet frequency +1
// Create bucket array. Loop over freqMap pushing values onto bucket as the index, with the bucket's value being the key from freqMap (input value)
// Loop over bucket from right to left, pushing values from bucket into output array. Each loop, check to see if we have enough values in output array, equal to k


