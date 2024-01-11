/**
 * @param {string} sentence
 * @return {boolean}
 */
// var checkIfPangram = function(sentence) {
//     let set = new Set(sentence);
    
//     for (let char of 'abcdefghijklmnopqrstuvwxyz') {
//         if (!set.has(char)) {
//             return false;
//         }
//     }
    
//     return true;
// };

var checkIfPangram = function(sentence) {
    let seen = new Map();
    
    for (let char of sentence) {
        if (seen.has(char)) {
            seen.set(char, seen.get(char) + 1);
        } else {
            seen.set(char, 1);
        }
    }
    
    return seen.size === 26;
};
