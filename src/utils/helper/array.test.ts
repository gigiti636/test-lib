import { accumulateAmountsAndSum, getDistinctEntries } from './array';
import { describe, it, expect } from 'vitest';

describe('getDistinctEntries', () => {
  it('should return distinct entries based on the specified field', () => {
    const array = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 3, name: 'John' },
      { id: 4, name: 'Doe' },
      { id: 5, name: 'John' },
    ];

    const distinctNames = getDistinctEntries(array, 'name');

    expect(distinctNames).toEqual(['John', 'Jane', 'Doe']);
  });

  it('should handle empty array', () => {
    const array: unknown[] = [];
    // @ts-ignore
    const distinctEntries = getDistinctEntries(array, 'name');

    expect(distinctEntries).toEqual([]);
  });

  it('should throw an error when the specified field does not exist in the array entries', () => {
    // @ts-ignore
    const inputArray: never[] = [{ test: 'a' }];
    const field = 'nonexistentField';

    expect(() => getDistinctEntries(inputArray, field)).toThrowError(
      `Field ${field} does not exist in the array entries.`,
    );
  });
});

describe('accumulateAmountsAndSum', () => {
  it('should return the total sum of accumulated amounts', () => {
    const inputArray = [1, 2, 3, 4, 5];
    const totalSum = accumulateAmountsAndSum(inputArray);
    expect(totalSum).toBe(15);
  });

  it('should handle an empty array', () => {
    const totalSum = accumulateAmountsAndSum([]);
    expect(totalSum).toBe(0);
  });

  it('should handle negative numbers', () => {
    const inputArray = [-1, -2, -3, -4, -5];
    const totalSum = accumulateAmountsAndSum(inputArray);
    expect(totalSum).toBe(-15);
  });
});
