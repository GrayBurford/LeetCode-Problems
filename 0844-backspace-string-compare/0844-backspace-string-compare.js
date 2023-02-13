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