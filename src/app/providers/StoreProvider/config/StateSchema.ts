import {
  EnhancedStore, Reducer, ReducersMapObject, UnknownAction,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { IProfileSchema } from 'src/features/editableProfileCard';
import { ILoginSchema } from 'src/features/authByUsername';
import { IArticleDetailsSchema } from '@/entities/Article';
import { CounterSchema } from '@/entities/Counter';
import { IUserSchema } from '@/entities/User';
import { IScroll } from '@/shared/ui/Page';

import { IArticlesListSortSchema, IArticlesSearch } from '@/features/articleList';
import { IArticleDetailsCommentsSchema } from '@/widgets/article';
import { rtkApi } from '@/shared/api/rtkApi';
import { IArticlesListSchema, IArticleRecommendationsSchema } from '@/widgets/articleList';

export interface IStateSchema {
  counter: CounterSchema;
  user: IUserSchema;
  scroll: IScroll;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

  // async
  loginForm?: ILoginSchema;
  profile?: IProfileSchema;
  articleDetails?: IArticleDetailsSchema;
  articleDetailsComments?: IArticleDetailsCommentsSchema;
  articlesList?: IArticlesListSchema;
  articlesSort?: IArticlesListSortSchema;
  articlesSearch?: IArticlesSearch;
  articleRecommendations?: IArticleRecommendationsSchema;
}

export type TStateSchemaKey = keyof IStateSchema;

export interface IReducerManager {
  getReducerMap: () => ReducersMapObject<IStateSchema>;
  reduce: (state: IStateSchema, action: UnknownAction) => IStateSchema;
  add: (key: TStateSchemaKey, reducer: Reducer) => void;
  remove: (key: TStateSchemaKey) => void;
}

export interface IReduxStoreWithManager extends EnhancedStore<IStateSchema> {
  reducerManager: IReducerManager;
}

export interface IThunkExtraArg {
  api: AxiosInstance;
}

export interface IThunkConfig<T> {
  rejectValue: T;
  extra: IThunkExtraArg;
}
