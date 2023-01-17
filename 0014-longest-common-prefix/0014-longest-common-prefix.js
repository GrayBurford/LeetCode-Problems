/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    if (strs.length === 1) return strs[0];

    let truePrefix = '';
    let testPrefix = '';
    let firstWord = strs[0];

    for (let i = 0; i <= firstWord.length; i++){
        testPrefix = firstWord.slice(0,i);
        if (strs.every(function (word){
            return word.slice(0,i) === testPrefix;
        })) {
            truePrefix = testPrefix;
        }
    }
    return truePrefix;
};