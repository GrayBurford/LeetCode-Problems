
// var StockSpanner = function() {
    
// };

// /** 
//  * @param {number} price
//  * @return {number}
//  */
// StockSpanner.prototype.next = function(price) {
    
// };

// /** 
//  * Your StockSpanner object will be instantiated and called as such:
//  * var obj = new StockSpanner()
//  * var param_1 = obj.next(price)
//  */

class StockSpanner {
    constructor() {
        this.stack = [];
        this.span = [];
    }
    
    next(price) {
        let span = 1;
        
       
        while (this.stack.length && this.stack[this.stack.length - 1] <= price) {
            span += this.span.pop();
            this.stack.pop();
        }
        this.stack.push(price);
        this.span.push(span);
        return span;
    }
}