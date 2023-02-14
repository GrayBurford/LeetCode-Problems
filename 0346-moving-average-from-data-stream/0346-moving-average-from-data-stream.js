// /**
//  * @param {number} size
//  */
// var MovingAverage = function(size) {

// };

// /** 
//  * @param {number} val
//  * @return {number}
//  */
// MovingAverage.prototype.next = function(val) {

// };

// /** 
//  * Your MovingAverage object will be instantiated and called as such:
//  * var obj = new MovingAverage(size)
//  * var param_1 = obj.next(val)
//  */

class MovingAverage {
    constructor(size) {
        this.queue = [];
        this.size = size;
    }

    next (val) {
        this.queue.push(val);
        if (this.queue.length > this.size) {
            this.queue.shift();
        }

        return this.queue.reduce((a,c) => a + c) / this.queue.length;
    }
}

// Convert to ES2015 JS class notation
// MovingAverage class accepts a size (length) of how many numbers to store to average
// MovingAverage class also instantiates a queue (array)
// Could implement a doubly linked list on the queue to optimize runtime from O(n) to O(1)
// Every call to next() will add a value to the queue's end
// Check condition if queue length has exceeded max size; if so, shift the front val off
// If not, return current running average (total all values in array, and divide by current length)