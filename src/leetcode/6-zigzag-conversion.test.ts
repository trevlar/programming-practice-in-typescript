import { convert } from './6-zigzag-conversion';

describe('zigzag conversion', () => {
  it('should convert PAYPALISHIRING to PAHNAPLSIIGYIR', () => {
    const input = 'PAYPALISHIRING';
    const numRows = 3;
    const result = convert(input, numRows);

    const expected = 'PAHNAPLSIIGYIR';
    expect(result).toBe(expected);
  });

  it('should convert PAYPALISHIRING to PINALSIGYAHRPI', () => {
    const input = 'PAYPALISHIRING';
    const numRows = 4;
    const result = convert(input, numRows);

    const expected = 'PINALSIGYAHRPI';
    expect(result).toBe(expected);
  });

  it('should convert A to A', () => {
    const input = 'A';
    const numRows = 1;
    const result = convert(input, numRows);

    const expected = 'A';
    expect(result).toBe(expected);
  });

  it('should convert AB to AB', () => {
    const input = 'AB';
    const numRows = 1;
    const result = convert(input, numRows);

    const expected = 'AB';
    expect(result).toBe(expected);
  });

  it('should convert ABC to ABC', () => {
    const input = 'ABC';
    const numRows = 1;
    const result = convert(input, numRows);

    const expected = 'ABC';
    expect(result).toBe(expected);
  });
});
