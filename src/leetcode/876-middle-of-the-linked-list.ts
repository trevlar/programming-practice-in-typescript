/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

export function middleNode(head: ListNode | null): ListNode | null {
    let slowCursor = head;
    let fastCursor = head;

    while (fastCursor !== null && fastCursor.next !== null) {
        slowCursor = slowCursor.next;
        // For every node traversed the fastCursor will traverse twice
        // This means we only need to loop through half of the items in the list.
        fastCursor = fastCursor.next.next;
    }

    return slowCursor;
}

// Space Complexity O(1)
// Time Complexity  O(n)
