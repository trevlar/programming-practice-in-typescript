import { romanToInt } from './13-roman-to-integer';

describe('roman to integer', () => {
    it.each([
        [3, 'III'],
        [4, 'IV'],
        [9, 'IX'],
        [58, 'LVIII'],
        [1994, 'MCMXCIV'],
    ])('should return %i for romanToInt(%s)', (expected: number, input: string) => {
        const result = romanToInt(input);

        expect(result).toEqual(expected);
    });
});
