/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let counts = new Map();
    for (char of magazine) {
        counts.set(char, (counts.get(char) || 0) + 1);
    }
    
    for (char of ransomNote) {
        if (counts.get(char) === undefined) {
            return false;
        }
        
        counts.set(char, counts.get(char) - 1);
        
        if (counts.get(char) === 0) {
            counts.delete(char);
        }
        
    }
    
    return true;
};