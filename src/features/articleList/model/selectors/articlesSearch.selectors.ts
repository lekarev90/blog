import { IStateSchema } from '@/app/providers/StoreProvider';

export const getArticlesSearchText = (state: IStateSchema) => state.articlesSearch;
