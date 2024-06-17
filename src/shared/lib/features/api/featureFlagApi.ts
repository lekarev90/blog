import { rtkApi } from '@/shared/api/rtkApi';
import { IFeatureFlags } from '@/shared/types/IFeatureFlags';

interface IUpdateFeatureFlags {
  userId: string;
  features: Partial<IFeatureFlags>;
}

export const featureFlagApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    updateFeatureFlags: build.mutation<void, IUpdateFeatureFlags>({
      query: ({ userId, features }) => ({
        url: `/users/${userId}/`,
        method: 'PATCH',
        body: {
          features,
        },
      }),
    }),
  }),
});

export const updateFeatureFlagsMutation = featureFlagApi.endpoints.updateFeatureFlags.initiate;
