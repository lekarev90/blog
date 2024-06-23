import { Meta, StoryObj } from '@storybook/react';

import { ARTICLES_REQUEST_URL, articlesMockWithRandom, EArticlesView } from '@/entities/Article';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { ArticlesList } from './ArticlesList';

export default {
  title: 'widgets/ArticleList',
  component: ArticlesList,
  decorators: [StoreDecorator({})],
  parameters: {
    mockData: [
      {
        url: `${__API__}${ARTICLES_REQUEST_URL}?_expand=user`,
        method: 'GET',
        status: 200,
        response: [
          articlesMockWithRandom(),
          articlesMockWithRandom(),
          articlesMockWithRandom(),
          articlesMockWithRandom(),
          articlesMockWithRandom(),
          articlesMockWithRandom(),
          articlesMockWithRandom(),
          articlesMockWithRandom(),
          articlesMockWithRandom(),
        ],
      },
    ],
  },
  args: {
    articles: [
      articlesMockWithRandom(),
      articlesMockWithRandom(),
      articlesMockWithRandom(),
      articlesMockWithRandom(),
      articlesMockWithRandom(),
      articlesMockWithRandom(),
      articlesMockWithRandom(),
      articlesMockWithRandom(),
      articlesMockWithRandom(),
    ] as any,
    articlesView: EArticlesView.GRID,
  },
} as Meta<typeof ArticlesList>;

export const Default: StoryObj<typeof ArticlesList> = {};

export const Loading: StoryObj<typeof ArticlesList> = {
  args: {
    isLoading: true,
  },
};
