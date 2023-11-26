import { maximumWealth } from './1672-richest-customer-wealth';

describe('richest customer wealth', () => {
    it.each([
        [
            6,
            [
                [1, 2, 3],
                [3, 2, 1],
            ],
        ],
        [
            10,
            [
                [1, 5],
                [7, 3],
                [3, 5],
            ],
        ],
        [
            17,
            [
                [2, 8, 7],
                [7, 1, 3],
                [1, 9, 5],
            ],
        ],
    ])('should return %i for maximumWealth(%s)', (expected: number, accounts: number[][]) => {
        const result = maximumWealth(accounts);

        expect(result).toEqual(expected);
    });
});
