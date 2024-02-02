import { StateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
  test('should return counter value', () => {
    const state: Partial<StateSchema> = {
      counter: { value: 10 },
    };

    const expected = getCounterValue(state as StateSchema);
    const result = 10;

    expect(expected).toEqual(result);
  });
});
