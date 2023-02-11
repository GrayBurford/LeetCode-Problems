/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
//     if (s.length % 2 !== 0) return false;
//     let stack = [];

//     for (let i = 0; i < s.length; i++) {
//         if(s[i] === "(") {
//             stack.push(")");
//         }
//         else if (s[i] === "[") {
//             stack.push("]");
//         }
//         else if (s[i] === "{") {
//             stack.push("}");
//         }
//         else if (s[i] !== stack.pop()) {
//             return false;
//         }
//     }
//     if (stack.length) return false;

//     return true;
    
    let stack = [];
    const map = {
        "(" : ")",
        "[" : "]",
        "{" : "}"
    }
    
    for (let char of s) {
        if (map[char]) {
            stack.push(char);
        } else {
            if (!stack.length) return false;
            
            let lastOpen = stack.pop();
            if (map[lastOpen] !== char) return false;
        }
    }
    
    return stack.length === 0 ? true : false;
};

// start a stack to keep track only of running open brackets
// use an object/hash map to store closing values to open brackets to be compared to
// Loop over each char in the string
// if the char is an open bracket, push to stack
// if the char is not (then, a closed one), check that it's the closed version of the correct opening one -->
// compare the map of stack.pop() (the last open char) to current char (which is closed)
// if it is not a match, return false (not valid parentheses string)
// after loop ends, no issues found yet. Must check that stack is empty, otherwise there are residual open brackets left (no match)