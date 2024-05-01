export enum ERoles {
  ADMIN ='ADMIN',
  SUPERADMIN ='SUPERADMIN',
  USER = 'USER'
}

export interface IUser {
  id: string;
  username: string;
  password?: string;
  role?: ERoles;
  avatar?: string;
}

export interface IUserSchema {
  authData?: IUser;
  initialized?: boolean;
}
