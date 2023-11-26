import { twoSum } from './1-two-sum';

describe('two sum', () => {
    it.each([
        [[0, 1], [2, 7, 11, 15], 9],
        [[1, 2], [3, 2, 4], 6],
        [[0, 1], [3, 3], 6],
    ])(
        'should return %i for twoSum(%s, %i)',
        (expected: number[], nums: number[], target: number) => {
            const result = twoSum(nums, target);

            expect(result).toEqual(expected);
        },
    );
});
