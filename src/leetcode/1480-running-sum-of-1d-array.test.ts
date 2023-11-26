import { runningSum } from './1480-running-sum-of-1d-array';

describe('running sum of 1d array', () => {
    it.each([
        [
            [1, 3, 6, 10],
            [1, 2, 3, 4],
        ],
        [
            [1, 2, 3, 4, 5],
            [1, 1, 1, 1, 1],
        ],
        [
            [3, 4, 6, 16, 17],
            [3, 1, 2, 10, 1],
        ],
    ])('should return %s for runningSum(%s)', (expected: number[], nums: number[]) => {
        const result = runningSum(nums);

        expect(result).toEqual(expected);
    });
});
