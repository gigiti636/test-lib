import { describe, expect, it, vi } from 'vitest';
import { renderHook } from '@testing-library/react';
import useURLParams from './useUrlParams';
import '@testing-library/jest-dom';

vi.mock('react-router-dom', async () => {
  return {
    useNavigate: vi.fn(),
    useSearchParams: () => {
      const searchParams = new URLSearchParams('?key1=value1&key2=value2');
      return [searchParams];
    },
  };
});

describe('useURLParams', () => {
  it('should read URL params correctly', () => {
    // Render the hook
    const { result } = renderHook(() => useURLParams());

    const query_string_object = result.current.queryStringToObject();

    expect(query_string_object).toEqual({
      key1: ['value1'],
      key2: ['value2'],
    });
  });
});
