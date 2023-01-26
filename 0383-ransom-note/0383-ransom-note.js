/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
//     for (let i = 0; i < ransomNote.length; i++) {
//         let r = ransomNote.charAt(i);

//         let match = magazine.indexOf(r);

//         if (match === -1) {
//             return false;
//         } else {
//             magazine = magazine.slice(0, match) + magazine.slice(match+1);
//         }
//     }

//     return true;
    
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

// - Loop over magazine and log each character in a hash map where the key is the character, and the value is the frequency of that character
// - Loop over ransom note characters, check magazine for a match, and remove one count of that character if the character matches.
// - If the char does not match, or if there are no remaining characters in magazine to match, return false.
// - If we get to the end of ransomNote successfully, return true