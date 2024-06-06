import * as yup from 'yup';
import { generateResetValues } from './schemaUtils';
import { describe, it, expect } from 'vitest';

describe('generateResetValues', () => {
  it('should return the correct type', () => {
    const schema = yup.object({
      firstName: yup.string(),
      lastName: yup.string(),
      email: yup.string().email(),
    });

    // @ts-ignore
    const resetValues = generateResetValues(schema);

    expect(resetValues).toEqual<
      Partial<{
        firstName: string;
        lastName: string;
        email: string;
      }>
    >({
      firstName: '',
      lastName: '',
      email: '',
    });
  });
});
