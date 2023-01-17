/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    for (let i = 0; i < ransomNote.length; i++) {
        let r = ransomNote.charAt(i);

        let match = magazine.indexOf(r);

        if (match === -1) {
            return false;
        } else {
            magazine = magazine.slice(0, match) + magazine.slice(match+1);
        }
    }

    return true;
};