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

export enum EArticleTypes {
  ALL = 'all',
  IT = 'IT',
  MEDICINE = 'MEDICINE',
  TRAVEL = 'TRAVEL',
  ECONOMIC = 'ECONOMIC',
  POLITICS = 'POLITICS',
  SPORT = 'SPORT',
  EDUCATION = 'EDUCATION',
  BUSINESS = 'BUSINESS',
  SECURITY = 'SECURITY',
  ETHICS = 'ETHICS',
  SOCIAL = 'SOCIAL',
  PSYCHOLOGY = 'PSYCHOLOGY',
  ENVIRONMENT = 'ENVIRONMENT',
  TECHNOLOGY = 'TECHNOLOGY',
  HEALTH = 'HEALTH',
  GLOBAL = 'GLOBAL',
  TRENDS = 'TRENDS',
  SCIENCE = 'SCIENCE',
  CULTURE = 'CULTURE'
}

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

export enum EArticlesView {
  LIST = 'list',
  GRID = 'grid',
}
