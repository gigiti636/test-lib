import { convertToBase64 } from './files';
import { describe, it, expect } from 'vitest';

describe('convertToBase64', () => {
  it('should convert a file to base64 string', async () => {
    // Create a mock file object
    const mockFile = new File(['mock file content'], 'test.txt', { type: 'text/plain' });

    // Call the function and await the result
    const result = await convertToBase64(mockFile);
    expect(result.startsWith('data:text/plain;base64,')).toBeTruthy();
  });
});
