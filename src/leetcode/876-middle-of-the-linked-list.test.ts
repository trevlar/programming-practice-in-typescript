import { buildLinkedList } from '../utils/LinkedList';
import { middleNode } from './876-middle-of-the-linked-list';

describe('middle of the linked list', () => {
    it.each([
        [3, [1, 2, 3, 4, 5]],
        [4, [1, 2, 3, 4, 5, 6]],
    ])('should return %s for middleNode(%s)', (expected: number, values: number[]) => {
        const head = buildLinkedList(values);

        const result = middleNode(head);

        expect(result?.val).toBe(expected);
    });
});
