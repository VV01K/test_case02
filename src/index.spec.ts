import { med } from './index';

describe('test', () => {
  test('gives 5', async () => {
    expect(med()).toEqual(5);
  });
});
