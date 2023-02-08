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
var reverseList = function(head) {
    let prev = null;
    let curr = head;
    
    while (curr) {
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }
    return prev;
};

// instantiate prev so we have a variable that nextNode can point backwards toward
// instantiate curr starting from head which will be used to iterate/increment through the LL
// while curr is not null (through the end of the list), set new variable nextNode to be curr.next
// nextNode variable is so we do not lose track of the actual next node to reverse pointers for
// curr.next to point backward to prev
// prev to be set forward to curr
// curr to jump back forward to temp variable nextNode (otherwise wouldn't be able to reconnect back to the rest of the LL)
// return prev after curr becomes null, which is now the "head" of the reversed LL