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
var deleteDuplicates = function(head) {
    let curr = head;
    
    while (curr !== null && curr.next !== null) {
        if (curr.val === curr.next.val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    
    return head;
};

// Linked list is sorted, so won't need to worry about revisiting old values.
// use curr/temp pointer to compare current value to curr.next.val.
// If they are the same value (duplicate), then point curr.next to curr.next.next
