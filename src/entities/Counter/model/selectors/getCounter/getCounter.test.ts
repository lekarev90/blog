import { IStateSchema } from '@/app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('getCounter', () => {
  test('should return counter value', () => {
    const state: Partial<IStateSchema> = {
      counter: { value: 10 },
    };

    const expected = getCounter(state as IStateSchema);
    const result = { value: 10 };

    expect(expected).toEqual(result);
  });
});
