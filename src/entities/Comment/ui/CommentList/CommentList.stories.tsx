import { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { CommentList } from './CommentList';

export default {
  title: 'entities/CommentList',
  component: CommentList,
  decorators: [StoreDecorator({})],
  parameters: { },
  args: {
    comments: [
      {
        id: '1',
        text: 'some comment y',
        articleId: '1',
        userId: '1',
        user: {
          id: '1',
          username: 'admin',
          password: '123',
          role: 'SUPER_ADMIN',
          avatar: 'https://picsum.photos/200/200',
        },
      },
      {
        id: '2',
        text: 'comment from John',
        articleId: '1',
        userId: '2',
        user: {
          id: '2',
          username: 'John',
          password: '123',
          role: 'USER',
          avatar: 'https://picsum.photos/200/300',
        },
      },
      {
        articleId: '1',
        userId: '1',
        text: 'ccc',
        id: 'j0Iwi7D',
        user: {
          id: '1',
          username: 'admin',
          password: '123',
          role: 'SUPER_ADMIN',
          avatar: 'https://picsum.photos/200/200',
        },
      },
    ],
  },
} as Meta<typeof CommentList>;

export const Default: StoryObj<typeof CommentList> = {};

export const NoComments: StoryObj<typeof CommentList> = {
  args: {
    comments: [],
  },
};

export const isLoading: StoryObj<typeof CommentList> = {
  args: {
    isLoading: true,
  },
};
