import * as statsAsync from '../statsAsync';

describe('Stats Async', () => {
  test('calculates the sum of an array of numbers (async)', async () => {
    const result = await statsAsync.sum([1, 2, 3]);
    const expected = 6;
    expect(result).toBe(expected);
  });

  test('calculates the average of an array of numbers (async)', async () => {
    const result = await statsAsync.average([1, 2, 3]);
    const expected = 2;
    expect(result).toBe(expected);
  });
});
