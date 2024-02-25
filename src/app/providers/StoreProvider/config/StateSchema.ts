import {
  EnhancedStore, Reducer, ReducersMapObject, UnknownAction,
} from '@reduxjs/toolkit';
import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { ILoginSchema } from 'features/AuthByUsername';

export interface IStateSchema {
  counter: CounterSchema;
  user: UserSchema;

  // async
  loginForm?: ILoginSchema;
}

export type StateSchemaKey = keyof IStateSchema

export interface IReducerManager {
  getReducerMap: () => ReducersMapObject<IStateSchema>;
  reduce: (state: IStateSchema, action: UnknownAction) => IStateSchema;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<IStateSchema> {
  reducerManager: IReducerManager
}
