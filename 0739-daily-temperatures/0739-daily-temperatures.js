/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let stack = [];
    let output = new Array(temperatures.length).fill(0);
    
    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && temperatures[stack[stack.length-1]] < temperatures[i]) {
            let j = stack.pop();
            output[j] = i - j;
        }
        
        stack.push(i);
    }
    
    return output;
};

// initialize stack and answer
// iterate over the input temps
// check while stack is not 0, and each index of the last stack element < current temp value
// check that the monotonic decreasing property will be maintained
// pop value that is warmer, and calculate distance from the curr element and element that just got popped
// push curr index onto stack, then return answer once algorithm is done

// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]