import { IStateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
  test('should return counter value', () => {
    const state: Partial<IStateSchema> = {
      counter: { value: 10 },
    };

    const expected = getCounterValue(state as IStateSchema);
    const result = 10;

    expect(expected).toEqual(result);
  });
});
