import { afterEach, beforeAll, afterAll, expect } from 'vitest';
import { cleanup } from '@testing-library/react';
import { handlers } from 'src/__mock__/browser';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/matchers';
import * as matchers from '@testing-library/jest-dom/matchers';
import fetch, { Headers, Request, Response } from 'node-fetch';
import { setupServer } from 'msw/node';

const server = setupServer(...handlers);

expect.extend(matchers);

// @ts-ignore
globalThis.fetch = fetch;
// @ts-ignore
globalThis.Headers = Headers;
// @ts-ignore
globalThis.Request = Request;
// @ts-ignore
globalThis.Response = Response;

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

afterAll(() => server.close());

afterEach(() => server.resetHandlers());

afterEach(() => {
  cleanup();
});
