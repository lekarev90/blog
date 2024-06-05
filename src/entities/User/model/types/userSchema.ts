import { ERoles } from '../const/const';
import { IFeatureFlags } from '@/shared/types/IFeatureFlags';

export interface IUser {
  id: string;
  username: string;
  password?: string;
  roles?: ERoles[];
  avatar?: string;
  features?: IFeatureFlags
}

export interface IUserSchema {
  authData?: IUser;
  initialized?: boolean;
}
