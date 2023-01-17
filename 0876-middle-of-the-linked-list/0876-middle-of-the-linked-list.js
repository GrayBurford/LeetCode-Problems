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
var middleNode = function(head) {
    let temp = head;
    let count = 0;

    while (temp != null) {
        count++;
        temp = temp.next;
    }

    let mid = Math.floor(count/2);
    // count/2 % 2 !== 0 ? mid = Math.floor(count/2) : mid = count/2;

    for (let i = 0; i < mid; i++) head = head.next;
    return head;
};