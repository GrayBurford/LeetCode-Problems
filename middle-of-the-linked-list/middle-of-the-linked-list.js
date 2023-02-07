/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// var middleNode = function(head) {
//     let temp = head;
//     let count = 0;

//     while (temp != null) {
//         count++;
//         temp = temp.next;
//     }

//     let mid = Math.floor(count/2);
//     // count/2 % 2 !== 0 ? mid = Math.floor(count/2) : mid = count/2;

//     for (let i = 0; i < mid; i++) head = head.next;
//     return head;
// };


// Using Fast & Slow pointers
var middleNode = function(head) {
    let slow = head;
    let fast = head;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return slow;
};

// Use fast and slow pointers to find middle of linked list (increment by 1 and 2)
// while loop checks when fast pointer has reaches the end; slow pointer will be at the middle
// while loop checks for fast and fast.next, but not fast.next.next. If fast pointer is at the last node, it won't incremenet again (fast.next will be null). But if fast pointer is at the second to last node, it will incremenent to null (beyond the end), which allows slow to increment to the second of the 2 middle nodes automatically.