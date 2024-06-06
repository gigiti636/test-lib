import { commaSeparatedFormatter, stringToColor } from './string';
import { describe, expect, it } from 'vitest';

describe('stringToColor', () => {
  it('should return a color based on the input string', () => {
    const color1 = stringToColor('hello world');
    const color2 = stringToColor('foo bar');

    expect(color1).not.toEqual(color2);
  });
});

describe('commaSeparatedFormatter', () => {
  it('should return "0.00" for NaN input', () => {
    const result = commaSeparatedFormatter(NaN);
    expect(result).toBe('0.00');
  });

  it('should format the number with commas and two decimal places', () => {
    // Test with a random number
    const result = commaSeparatedFormatter(1234567.89);
    expect(result).toBe('1.234.567,89');

    // Test with a number without decimals
    const result2 = commaSeparatedFormatter(987654321);
    expect(result2).toBe('987.654.321,00');

    // Test with a negative number
    const result3 = commaSeparatedFormatter(-1234.56);
    expect(result3).toBe('-1.234,56');
  });
});
