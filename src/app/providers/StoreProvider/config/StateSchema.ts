import {
  EnhancedStore, Reducer, ReducersMapObject, UnknownAction,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { IArticleDetailsSchema } from 'entities/Article';
import { CounterSchema } from 'entities/Counter';
import { IProfileSchema } from 'features/EditableProfileCard';
import { IUserSchema } from 'entities/User';
import { ILoginSchema } from 'features/AuthByUsername';
import { IScroll } from 'shared/ui/Page/model/types/scrollTypes';
import { IArticlesListSchema } from 'widgets/articleList';
import { IArticlesListSortSchema, IArticlesSearch } from 'features/articleList';
import { IArticleRecommendationsSchema } from 'features/article';
import { IArticleDetailsCommentsSchema } from 'widgets/article';
import { rtkApi } from 'shared/api/rtkApi';

export interface IStateSchema {
  counter: CounterSchema;
  user: IUserSchema;
  scroll: IScroll
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

  // async
  loginForm?: ILoginSchema;
  profile?: IProfileSchema;
  articleDetails?: IArticleDetailsSchema;
  articleDetailsComments?: IArticleDetailsCommentsSchema;
  articlesList?: IArticlesListSchema;
  articlesSort?: IArticlesListSortSchema;
  articlesSearch?: IArticlesSearch
  articleRecommendations?: IArticleRecommendationsSchema;
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
