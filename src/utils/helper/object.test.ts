import { filterEmptyValues } from './object';
import { describe, it, expect } from 'vitest';

describe('filterEmptyValues', () => {
  it('should return an empty object when input is an empty object', () => {
    const input: unknown = {};
    const result = filterEmptyValues(input);
    expect(result).toEqual({});
  });

  it('should return an empty object when input is an object with only empty values', () => {
    const input: unknown = { a: '', b: undefined, c: null };
    const result = filterEmptyValues(input);
    expect(result).toEqual({});
  });

  it('should return an object with non-empty values when input is an object with non-empty values', () => {
    const input: unknown = { a: 'a', b: 'b', c: 'c' };
    const result = filterEmptyValues(input);
    expect(result).toEqual({ a: 'a', b: 'b', c: 'c' });
  });
});
