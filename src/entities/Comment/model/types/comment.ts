import { IUser } from 'entities/User';

export interface IComment {
  id: string
  articleId: string
  userId: string
  user: IUser
  text: string
}
