import { CounterSchema } from '../types/counterSchema';

import { decrementAction, incrementAction, counterReducer } from './counterSlice';

describe('counterSlice', () => {
  test('increment', () => {
    const state : CounterSchema = { value: 10 };

    const expected = counterReducer(state, incrementAction());
    const result = { value: 11 };

    expect(expected).toEqual(result);
  });

  test('increment', () => {
    const state : CounterSchema = { value: 10 };

    const expected = counterReducer(state, decrementAction());
    const result = { value: 9 };

    expect(expected).toEqual(result);
  });

  test('shoud work with empty state', () => {
    const expected = counterReducer(undefined, incrementAction());
    const result = { value: 1 };

    expect(expected).toEqual(result);
  });
});
