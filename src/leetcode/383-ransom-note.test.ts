import { canConstruct } from './383-ransom-note';

describe('ransom note', () => {
    it.each([
        [false, 'a', 'b'],
        [false, 'aa', 'ab'],
        [true, 'aa', 'aab'],
    ])(
        'should return %s for ransomNote(%s, %s)',
        (expected: boolean, ransomNote: string, magazine: string) => {
            const result = canConstruct(ransomNote, magazine);

            expect(result).toBe(expected);
        },
    );
});
