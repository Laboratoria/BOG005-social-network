import { router } from '../src/lib/routes.js';

describe('router', () => {
  it('debería ser una función', () => {
    expect(typeof router).toBe('function');
    // routes(Hash);
  });
});