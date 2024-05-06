import { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { articlesMockWithRandom } from '../../model/mock/articlesMock';
import { ArticleList } from './ArticleList';

import { ARTICLES_REQUEST_URL } from '../../model/const/const';

export default {
  title: 'entities/ArticleList',
  component: ArticleList,
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
} as Meta<typeof ArticleList>;

export const Default: StoryObj<typeof ArticleList> = {};

export const Loading: StoryObj<typeof ArticleList> = {
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
