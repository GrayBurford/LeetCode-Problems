/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function(words) {
    let sortedNoDupes = words.map(word => Array.from(new Set(word.split('').sort())).join(''));
    let freqMap = new Map();
    let output = 0;
    
    for (const val of sortedNoDupes) {
        if (freqMap.get(val) === undefined) {
            freqMap.set(val, 1);
        } else {
            freqMap.set(val, freqMap.get(val) + 1);
        }
    }
    
    for (const val of freqMap.values()) {
        if (val > 1) {
            output += val * (val - 1) / 2;
        }
    }
    
    return output;
};

// mutate input array to remove duplicates and sort
// add values as hash map keys, and hashmap values the frequency occurence
// if key already exists, add 1 to output array