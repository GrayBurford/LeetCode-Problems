
var RecentCounter = function() {
    this.queue = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    while ((this.queue.length) && (this.queue[0] < t - 3000)) {
        this.queue.shift();
    }
    
    this.queue.push(t);
    
    return this.queue.length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

// push t onto queue
// check if first in value is within 3000 time of the most recent time value (t - 3000)
// if first value in queue more than 3000 time, then shift it off
// if oldest value is not within 3000 time of last addition, push newest time stamp on queue
// return the length of the queue