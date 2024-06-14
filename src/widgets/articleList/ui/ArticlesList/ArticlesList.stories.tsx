import { Meta, StoryObj } from '@storybook/react';

import { articlesMockWithRandom, ARTICLES_REQUEST_URL } from '@/entities/Article';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { ArticlesList } from './ArticlesList';

export default {
  title: 'entities/ArticleList',
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
} as Meta<typeof ArticlesList>;

export const Default: StoryObj<typeof ArticlesList> = {};

export const Loading: StoryObj<typeof ArticlesList> = {
  parameters: {
    mockData: [
      {
        url: `${__API__}${ARTICLES_REQUEST_URL}?_expand=user`,
        method: 'GET',
        status: 200,
        response: [],
        delay: 10000 * 10000,
      },
    ],
  },
};
