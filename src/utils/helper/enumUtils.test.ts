import { enumToOptions, getKeyByValue } from './enumUtils';
import { describe, it, expect } from 'vitest';

describe('getKeyByValue', () => {
  it('should return the key when the value is found', () => {
    const enumObj = {
      A: 'a',
      B: 'b',
    };

    const result = getKeyByValue(enumObj, 'a');

    expect(result).toEqual('A');
  });

  it('should return undefined when the value is not found', () => {
    const enumObj = {
      A: 'a',
      B: 'b',
    };

    const result = getKeyByValue(enumObj, 'c');

    expect(result).toBeUndefined();
  });
});

describe('enumToOptions', () => {
  it('should return an array of options', () => {
    // eslint-disable-next-line no-unused-vars
    enum MyEnum {
      // eslint-disable-next-line no-unused-vars
      VALUE_1 = 'value_1',
      // eslint-disable-next-line no-unused-vars
      VALUE_2 = 'value_2',
    }

    const options = enumToOptions(MyEnum);

    expect(options).toEqual([
      { value: 'value_1', label: 'value 1' },
      { value: 'value_2', label: 'value 2' },
    ]);
  });
});
