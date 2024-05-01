import { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { AddCommentForm } from './AddCommentForm';

export default {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
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
} as Meta<typeof AddCommentForm>;

export const Default: StoryObj<typeof AddCommentForm> = {};
