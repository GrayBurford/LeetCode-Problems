/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
//     if (!head || head.next === null) return head;
    
//     let curr = head;
//     let counter = left;
//     let finalHead = head;
//     let lastNodeToConnectReversedLL = head;
    
//     // increment curr to index that we need to start reversing.
//     if (left !== 1) {
//         for (let i = 1; i < left; i++) {
//             curr = curr.next;
//         }
//     }
    
//     // incremement 1 index past right to store first value to reconnect end of reversed LL to later
//     for (let i = 1; i <= right; i++) {
//         lastNodeToConnectReversedLL = lastNodeToConnectReversedLL.next;
//     }
    
//     let tailOfReversedLL = curr;
    
//     let reversedSection = reverseLL(curr);
//     finalHead.next = reversedSection;
    
//     tailOfReversedLL.next = lastNodeToConnectReversedLL;
    
//     return finalHead;
    
    
//     // function to reverse a linked list
//     function reverseLL (head) {
//         let prev = null;
//         let curr = head;
        
//         while (curr && counter <= right) {
//             let nextNode = curr.next;
//             curr.next = prev;
//             prev = curr;
//             curr = nextNode;
//             counter++;
//         }
        
//         return prev;
//     }
    
//     FROM LEETCODE paradiddle:
    if (!head) {
        return null;
    }
    let current = head;
    let previous = null;
    while (left > 1) {
        previous = current;
        current = current.next;
        left--;
        right--;
    }
    let connectNodePrevious = previous;
    let connectNodeCurrent = current;
    let temp = null;
    while (right > 0) {
        temp = current.next;
        current.next = previous;
        previous = current;
        current = temp;
        right--;
    }
    if (connectNodePrevious) {
        connectNodePrevious.next = previous;
    } else {
        head = previous;
    }

    connectNodeCurrent.next = current;
    return head;
    
};

// traverse linked list and keep count of iterations to get to left index.
// pass "head" node at left index to function that reverses linked list
// also pass right variable to reverseLL function and increment right each iteration of the while loop
// have while loop stop once right variable has been exceeded