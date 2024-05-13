import { IStateSchema } from 'app/providers/StoreProvider';

export const articleRecommendationsIsLoading = (state: IStateSchema) => state.articleRecommendations?.isLoading;
