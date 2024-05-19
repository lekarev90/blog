export enum ERoles {
  ADMIN ='ADMIN',
  MANAGER ='MANAGER',
  USER = 'USER'
}

export interface IUser {
  id: string;
  username: string;
  password?: string;
  roles?: ERoles[];
  avatar?: string;
}

export interface IUserSchema {
  authData?: IUser;
  initialized?: boolean;
}
