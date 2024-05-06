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

export const ViewGrid: StoryObj<typeof ArticleList> = {};

export const LoadingViewList: StoryObj<typeof ArticleList> = {
  args: {
    isLoading: true,
  },
};

export const LoadingViewGrid: StoryObj<typeof ArticleList> = {
  args: {
    isLoading: true,
  },
};
