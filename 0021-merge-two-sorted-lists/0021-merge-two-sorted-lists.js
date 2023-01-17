/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (!list1 || !list2) {
        return list1 || list2;
    }

    let head = new ListNode(-101, null);
    let current = head;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }

        current = current.next;
    }

    // adds the remainder of the longer list;
    current.next = list1 || list2;

    return head.next;

    

    // // If l1 is lower
    // if (list1.val < list2.val) {
    //     list1.next = mergeTwoLists(list1.next, list2);
    //     return list1;
    // }
    // // If l2 is lower
    // else {
    //     list2.next = mergeTwoLists(list1, list2.next);
    //     return list2;
    // }
};