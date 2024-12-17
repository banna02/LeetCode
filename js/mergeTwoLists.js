"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListNode = void 0;
exports.mergeTwoLists = mergeTwoLists;
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
exports.ListNode = ListNode;
function mergeTwoLists(list1, list2) {
    // Create a dummy node to use as the starting point
    let dummy = new ListNode();
    // Tail node for the merged list
    let tail = dummy;
    // Iterate through both lists until one of them runs out
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            // Append list1 node to the merged list
            tail.next = list1;
            // Move list1 to the next node
            list1 = list1.next;
        }
        else {
            // Append list2 node to the merged list
            tail.next = list2;
            // Move list2 to the next node
            list2 = list2.next;
        }
        // Move the tail to the newly added node
        tail = tail.next;
    }
    // If there are remaining nodes in either list, append them
    if (list1 !== null) {
        tail.next = list1;
    }
    else {
        tail.next = list2;
    }
    // Return the merged list, starting from the node after the dummy node
    return dummy.next;
}
;
