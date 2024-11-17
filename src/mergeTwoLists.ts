
export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
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
      } else {
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
  } else {
      tail.next = list2;
  }

  // Return the merged list, starting from the node after the dummy node
  return dummy.next;
};