import { IStateSchema } from 'app/providers/StoreProvider';

export const getArticlesListIsLoading = (state: IStateSchema) => state.articlesList?.isLoading;
export const getArticlesListError = (state: IStateSchema) => state.articlesList?.error;
