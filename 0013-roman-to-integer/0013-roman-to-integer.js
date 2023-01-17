/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const data = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000
    }
    let arr = s.split('');
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        arr[i] = data[arr[i]];
        total += arr[i];
        if (i >= 1 && arr[i-1] < arr[i]) {
            total -= arr[i-1]*2;
        }
    };
    return total;
};

// "MCMXCIV"
// ['M', 'C', 'M', 'X', 'C', 'I', 'V']
// ['1000', '100', '1000', '10', '100', '1', '5']