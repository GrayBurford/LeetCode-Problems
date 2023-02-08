/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    if (!head || !head.next) return head;
    
    let maxSum = -Infinity;
    let slow = head;
    let fast = head;
    
    // slow pointer finds middle of linked list
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    fast = head;
    
    //reverse second half of LL starting from slow pointer (middle of LL)
    function reverseLinkedList(head) {
        let prev = null;
        let curr = head;
        while (curr) {
            let nextNode = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextNode;
        }
        return prev;
    }
    
    slow = reverseLinkedList(slow);
    
    while (slow) {
        let tempSum = fast.val + slow.val;
        maxSum = Math.max(maxSum, tempSum);
        slow = slow.next;
        fast = fast.next;
    }
    
    return maxSum;

};

// use fast and slow pointers to find the middle of the linked list
// once middle is found (slow), reverse second half of LL with reverse function
// reset fast variable to be original LL head; slow variable is now head of reversed second half of LL
// increment slow variable to end of LL (while loop), comparing slow.val + fast.val each time to running maxSum variable
// once while loop finishes (slow gets to end/null), maxSum will be max value of twin pairs
// return maxSum
