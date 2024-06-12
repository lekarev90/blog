import { IFeatureFlags } from '@/shared/types/IFeatureFlags';

import { ERoles } from '../const/const';

import { IJsonSettings } from './jsonSettings';

export interface IUser {
  id: string;
  username: string;
  password?: string;
  roles?: ERoles[];
  avatar?: string;
  features?: IFeatureFlags;
  jsonSettings?: IJsonSettings;
}

export interface IUserSchema {
  authData?: IUser;
  initialized?: boolean;
}
