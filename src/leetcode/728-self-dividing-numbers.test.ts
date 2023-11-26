import { selfDividingNumbers } from './728-self-dividing-numbers';

describe('self dividing numbers', () => {
    it.each([
        [[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22], 1, 22],
        [[1, 2, 3, 4, 5, 6, 7, 8, 9], 1, 9],
        [[48, 55, 66, 77], 47, 85],
    ])(
        'should return %i for selfDividingNumbers(%i, %i)',
        (expected: number[], left: number, right: number) => {
            const result = selfDividingNumbers(left, right);

            expect(result).toEqual(expected);
        },
    );
});
