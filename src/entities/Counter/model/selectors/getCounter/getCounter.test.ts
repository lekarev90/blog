import { StateSchema } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('getCounter', () => {
  test('should return counter value', () => {
    const state: Partial<StateSchema> = {
      counter: { value: 10 },
    };

    const expected = getCounter(state as StateSchema);
    const result = { value: 10 };

    expect(expected).toEqual(result);
  });
});
