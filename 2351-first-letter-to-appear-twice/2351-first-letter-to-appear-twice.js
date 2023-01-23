/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let map = new Map();

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (map.has(char)) {
            return char;
        }
        map.set(char, i);
    }

};