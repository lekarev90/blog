import { rtkApi } from '@/shared/api/rtkApi';

import { IJsonSettings } from '../types/jsonSettings';
import { IUser } from '../types/userSchema';

interface ISetJsonSettings {
  userId: string;
  jsonSettings: IJsonSettings;
}

export const userApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    setJsonSettings: build.mutation<IUser, ISetJsonSettings>({
      query: ({ jsonSettings, userId }) => ({
        url: `/users/${userId}/`,
        method: 'PATCH',
        body: {
          jsonSettings,
        },
      }),
    }),
    getUserDataById: build.query<IUser, string>({
      query: (userId) => ({
        url: `/users/${userId}/`,
        method: 'GET',
      }),
    }),
  }),
});

export const setJsonSettingsMutation = userApi.endpoints.setJsonSettings.initiate;
export const getUserDataByIdQuery = userApi.endpoints.getUserDataById.initiate;
