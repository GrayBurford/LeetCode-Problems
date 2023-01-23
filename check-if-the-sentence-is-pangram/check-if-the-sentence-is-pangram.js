/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let set = new Set(sentence);
    
    for (let char of 'abcdefghijklmnopqrstuvwxyz') {
        if (!set.has(char)) {
            return false;
        }
    }
    
    return true;
};