/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let stack = [];
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === stack[stack.length - 1]) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    
    return stack.join('');
};

// Initialize stack with array
// Loop through string, comparing each value to last index of stack
// if characters are the same, don't push new char, just pop last char off and move on to next loop iteration
// Loop will continuously check last entry to stack before pushing new char on
// No 2 alike chars will ever be adjacent in the stack
// after loop ends, return stack.join('')