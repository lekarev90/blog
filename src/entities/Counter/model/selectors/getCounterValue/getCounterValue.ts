import { CounterSchema } from 'entities/Counter';
import { createSelector } from 'reselect';
import { getCounter } from '../getCounter/getCounter';

export const getCounterValue = createSelector(
  getCounter,
  (counter: CounterSchema) => counter.value,
);
