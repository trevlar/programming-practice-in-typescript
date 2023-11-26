export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

export function buildLinkedList(values: number[]) {
    let head = null;
    let tail = null;
    for (const value of values) {
        const node = new ListNode(value, null);
        if (head === null) {
            head = node;
            tail = node;
        } else {
            tail.next = node;
            tail = node;
        }
    }
    return head;
}
