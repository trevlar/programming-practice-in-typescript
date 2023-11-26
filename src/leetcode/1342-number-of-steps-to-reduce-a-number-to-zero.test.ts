import { numberOfSteps } from './1342-number-of-steps-to-reduce-a-number-to-zero';

describe('number of steps to reduce a number to zero', () => {
    it.each([
        [6, 14],
        [4, 8],
        [12, 123],
    ])('should return %s for numberOfSteps(%s)', (expected: number, num: number) => {
        const result = numberOfSteps(num);

        expect(result).toBe(expected);
    });
});
