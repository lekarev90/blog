import { useSelector } from 'react-redux';
import { IStateSchema } from '@/app/providers/StoreProvider';

type Selector<T> = (state: IStateSchema) => T
type Result<T> = [() => T, Selector<T>]

export const buildSelector = <T>(selector: Selector<T>): Result<T> => {
  const useSelectorHook = () => useSelector(selector);

  return [useSelectorHook, selector];
};
