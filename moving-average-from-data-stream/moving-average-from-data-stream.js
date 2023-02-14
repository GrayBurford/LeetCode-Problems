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
