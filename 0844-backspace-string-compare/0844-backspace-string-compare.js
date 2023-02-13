/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    return processString(s) === processString(t);
};

function processString (string) {
    let stack = [];
    
    for (const char of string) {
        if (char !== "#") {
            stack.push(char);
        } else if (stack.length) {
            stack.pop();
        }
    }
    
    return stack.join('');
}

// Recognize LIFO (last in; first out) pattern
// When we encounter a '#', we will be removing the last entry to the stack
// Build helper function to convert raw input string to process hash symbols
// Initialize stack; loop over string; if char is not #, push -- else check that stack isn't empty before popping last one off (deleting last entry)
// Main function compares the two processed strings for equality