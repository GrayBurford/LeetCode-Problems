/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let stack = [];
    let splitFilteredPath = path.split('/').filter(el => el !== '');
    
    for (const val of splitFilteredPath) {
        if (val === '.') {
            // do nothing, because this means stay in same directory
        } else if (val === '..') {
            if (stack.length) {
                stack.pop();
            }
        } else {
            stack.push(val);
        }
    }
    
    return "/" + stack.join('/');
};

// Use stack for LIFO properties (opening/coming out of directories)
// Split string on '/' so each value can be looked out individually
// Filter split string from above to remove empty strings "";
// Run for loop over this processed input. Ignore single '.' (means stay in same directory)
// If encountering '..', stack.pop() (going back out of current directory)
// Otherwise push value onto stack (going further into directories)
// After loop, join array with a starting '/' plus on each stack value with .join('/')
// EX: path = "/a/./b/../../c/"