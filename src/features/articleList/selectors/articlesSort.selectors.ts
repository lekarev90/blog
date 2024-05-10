import { IStateSchema } from 'app/providers/StoreProvider';

export const getArticlesSortData = (state: IStateSchema) => state.articlesSort;
