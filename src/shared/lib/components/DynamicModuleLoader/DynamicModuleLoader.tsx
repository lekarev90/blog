import { FC, ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';

import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';

import { useAppDispatch } from '../../hooks/useAppDispatch.hook';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

export interface IDynamicModuleLoaderProps {
  reducers: ReducersList;
  children: ReactNode;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<IDynamicModuleLoaderProps> = ({ children, reducers, removeAfterUnmount = true }) => {
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const mountedReducers = store.reducerManager.getReducerMap();

    Object.entries(reducers).forEach(([name, reducer]) => {
      const isMounted = mountedReducers[name as StateSchemaKey];

      if (!isMounted) {
        store.reducerManager.add(name as StateSchemaKey, reducer);
        dispatch({ type: `@INIT ${name} reducer` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StateSchemaKey);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
  }, [dispatch, reducers, removeAfterUnmount, store.reducerManager]);

  return children;
};
