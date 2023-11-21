import { average, sum } from '../stats';

describe('Stats', () => {
  test('calculates the sum of an array of numbers', () => {
    const result = sum([1, 2, 3]);
    const expected = 6;
    expect(result).toBe(expected);
  });

  test('calculates the average of an array of numbers', () => {
    const result = average([1, 2, 3]);
    const expected = 2;
    expect(result).toBe(expected);
  });
});
