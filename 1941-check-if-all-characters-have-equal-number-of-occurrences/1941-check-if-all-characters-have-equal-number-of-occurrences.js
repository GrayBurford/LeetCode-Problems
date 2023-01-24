/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let hashMap = new Map();
     for (let i = 0; i < s.length; i++) {
         hashMap.set(s[i], (hashMap.get(s[i]) || 0) + 1);
     }
    
    const freq = new Set();
    for (let val of hashMap.values()) {
        freq.add(val)
    }
    
    return freq.size === 1;
};