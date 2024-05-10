import {
  EnhancedStore, Reducer, ReducersMapObject, UnknownAction,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { IArticleDetailsCommentsSchema, IArticleDetailsSchema } from 'entities/Article';
import { CounterSchema } from 'entities/Counter';
import { IProfileSchema } from 'features/EditableProfileCard';
import { IUserSchema } from 'entities/User';
import { ILoginSchema } from 'features/AuthByUsername';
import { IScroll } from 'shared/ui/Page/model/types/scrollTypes';
import { IArticlesListSchema } from 'widgets/articleList';
import { IArticlesListSortSchema, IArticlesSearch } from 'features/articleList';

export interface IStateSchema {
  counter: CounterSchema;
  user: IUserSchema;
  scroll: IScroll

  // async
  loginForm?: ILoginSchema;
  profile?: IProfileSchema;
  articleDetails?: IArticleDetailsSchema;
  articleDetailsComments?: IArticleDetailsCommentsSchema;
  articlesList?: IArticlesListSchema;
  articlesSort?: IArticlesListSortSchema;
  articlesSearch?: IArticlesSearch
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

export interface IThunkExtraArg {
  api: AxiosInstance
}

export interface IThunkConfig<T> {
  rejectValue: T,
  extra: IThunkExtraArg
}
