import { IUser } from 'entities/User';

export enum ArticleBlockType {
  CODE = 'CODE',
  IMAGE = 'IMAGE',
  TEXT = 'TEXT',
}

export interface IArticleBlockBase {
  id: string;
  type: ArticleBlockType;
}

export interface IArticleCodeBlock extends IArticleBlockBase {
  type: ArticleBlockType.CODE;
  code: string;
  title?: string;
}

export interface IArticleImageBlock extends IArticleBlockBase {
  type: ArticleBlockType.IMAGE;
  src: string;
  title: string;
}

export interface IArticleTextBlock extends IArticleBlockBase {
  type: ArticleBlockType.TEXT;
  title?: string;
  paragraphs: string[];
}

export type TArticleBlock = IArticleCodeBlock | IArticleTextBlock | IArticleImageBlock;

export enum ArticleType {
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS',
  TRAVEL = 'TRAVEL',
  ECONOMIC = 'ECONOMIC',
  MEDICINE = 'MEDICINE',
  POLITICS = 'POLITICS',
  SPORT = 'SPORT',
}

export interface IArticle {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: string;
  createdAt: string;
  user: IUser;
  types: ArticleType[];
  blocks: TArticleBlock[];
}

export enum EArticleView {
  LIST = 'list',
  GRID = 'grid',
}
