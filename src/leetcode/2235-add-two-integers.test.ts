import { sum } from './2235-add-two-integers';

describe('add two integers', () => {
    it.each([
        [3, 1, 2],
        [5, 2, 3],
        [10, 5, 5],
    ])('should return %i for addTwoIntegers(%i, %i)', (expected: number, a: number, b: number) => {
        const result = sum(a, b);

        expect(result).toEqual(expected);
    });
});
