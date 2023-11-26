import { lengthOfLongestSubstring } from './3-longest-substring-without-repeating-characters';

describe('longest substring without repeating characters', () => {
    it.each([
        [3, 'abcabcbb'],
        [1, 'bbbbb'],
        [3, 'pwwkew'],
        [0, ''],
        [1, 'a'],
        [2, 'au'],
        [2, 'aab'],
        [3, 'dvdf'],
        [5, 'tmmzuxt'],
    ])('should return %i for lengthOfLongestSubstring(%s)', (expected: number, input: string) => {
        const result = lengthOfLongestSubstring(input);

        expect(result).toEqual(expected);
    });
});
