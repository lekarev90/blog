import { IStateSchema } from 'app/providers/StoreProvider';

export const getArticlesListData = (state: IStateSchema) => state.articlesList;
