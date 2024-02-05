/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let hash = new Map();
    
    for (let i = 0; i < s.length; i++) {
        let curr = s[i];
        
        if (hash.get(curr)) {
            hash.set(curr, hash.get(curr) + 1);
        } else {
            hash.set(curr, 1);
        }
    }
    
    for (let [key, val] of hash.entries()) {
        if (val === 1) {
            return s.indexOf(key);
        }
    }
    
    return -1
    
    
};  