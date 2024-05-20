import { IUser } from 'entities/User';
import { EArticleBlockType, EArticleTypes } from '../const/const';

export interface IArticleBlockBase {
  id: string;
  type: EArticleBlockType;
}

export interface IArticleCodeBlock extends IArticleBlockBase {
  type: EArticleBlockType.CODE;
  code: string;
  title?: string;
}

export interface IArticleImageBlock extends IArticleBlockBase {
  type: EArticleBlockType.IMAGE;
  src: string;
  title?: string;
}

export interface IArticleTextBlock extends IArticleBlockBase {
  type: EArticleBlockType.TEXT;
  title?: string;
  paragraphs: string[];
}

export type TArticleBlock = IArticleCodeBlock | IArticleTextBlock | IArticleImageBlock;

export interface IArticle {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: string;
  createdAt: string;
  user: IUser;
  types: EArticleTypes[];
  blocks: TArticleBlock[];
}
