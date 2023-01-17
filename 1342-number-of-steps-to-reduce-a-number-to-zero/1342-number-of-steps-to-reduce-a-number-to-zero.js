/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let steps = 0;
    let curr = num;

    while (curr > 0) {
        curr % 2 === 0 ? curr /= 2 : curr--;
        steps++;
    }

    return steps;
};