/**
 * @param {number} n
 * @return {string[]}
 */

function divBy3 (x) {
    return x % 3 === 0;
}

function divBy5 (x) {
    return x % 5 === 0;
}

var fizzBuzz = function(n) {
    let out = [];

    for (let i = 1; i <= n; i++) {
        if (divBy3(i) && divBy5(i)) {
            out.push("FizzBuzz");
        }
        else if (divBy3(i)) {
            out.push("Fizz");
        }
        else if (divBy5(i)) {
            out.push("Buzz");
        }
        else {
            out.push(i.toString());
        }
    }

    return out;
};