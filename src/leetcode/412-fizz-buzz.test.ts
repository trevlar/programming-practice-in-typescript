import { fizzBuzz } from './412-fizz-buzz';

describe('fizz buzz', () => {
    it.only.each([
        [['1'], 1],
        [['1', '2', 'Fizz'], 3],
        [['1', '2', 'Fizz', '4', 'Buzz'], 5],
    ])('should return %s for fizzBuzz(%s)', (expected: string[], num: number) => {
        const result = fizzBuzz(num);

        expect(result).toMatchObject(expected);
    });
});
