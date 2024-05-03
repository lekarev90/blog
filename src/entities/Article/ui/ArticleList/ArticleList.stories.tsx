import { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { ArticleList, EArticleView } from 'entities/Article';

import { articlesMock1 } from '../ArticleList/model/mock/articlesMock';

export default {
  title: 'entities/ArticleList',
  component: ArticleList,
  decorators: [StoreDecorator({})],
  args: {
    articles: [articlesMock1, articlesMock1, articlesMock1, articlesMock1, articlesMock1, articlesMock1],
  },
} as Meta<typeof ArticleList>;

export const ViewList: StoryObj<typeof ArticleList> = {};

export const ViewGrid: StoryObj<typeof ArticleList> = {
  args: {
    view: EArticleView.GRID,
  },
};

export const LoadingViewList: StoryObj<typeof ArticleList> = {
  args: {
    isLoading: true,
  },
};

export const LoadingViewGrid: StoryObj<typeof ArticleList> = {
  args: {
    isLoading: true,
    view: EArticleView.GRID,
  },
};
