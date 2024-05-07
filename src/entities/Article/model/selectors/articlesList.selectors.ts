import { IStateSchema } from 'app/providers/StoreProvider';

export const getArticlesListIsLoading = (state: IStateSchema) => state.articlesList?.isLoading;
export const getArticlesListError = (state: IStateSchema) => state.articlesList?.error;
export const getArticlesListPage = (state: IStateSchema) => state.articlesList?.page;
export const getArticlesListHasMore = (state: IStateSchema) => state.articlesList?.hasMore;
