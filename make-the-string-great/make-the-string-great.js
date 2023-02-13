/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    if (s.split('').length <= 1) return s;
    
    let stack = [s[0]];
    
    for (let i = 1; i < s.length; i++) {
        if (stack.length === 0) {
            stack.push(s[i]);
            continue;
        }
        
        let last = stack[stack.length - 1];
        
        if (isLower(last) && isUpper(s[i]) && isEqual(last, s[i]) 
            || isUpper(last) && isLower(s[i]) && isEqual(last, s[i])) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    
    return stack.join('');
    
};

function isLower (char) {
    return char === char.toLowerCase() ? true : false;
}

function isUpper (char) {
    return char === char.toUpperCase() ? true : false;
}

function isEqual (char1, char2) {
    return char1.toLowerCase() === char2.toLowerCase();
}

// create helper functions to check if a character is upper or lowercase
// Check if input string is length 1 or less, then return (no potential matches to remove)
//initiate stack starting with first char of string input
// Loop through string comparing last char of stack to next index of string
// if one is lower and the other upper, pop off stack
// if neither above (then both upper or both lower), add current index char to stack
// return joined stack