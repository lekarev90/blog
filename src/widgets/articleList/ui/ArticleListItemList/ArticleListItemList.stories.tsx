import { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { articlesMockWithRandom } from '../../../../entities/Article/model/mock/articlesMock';
import { ArticleListItemList } from './ArticleListItemList';

export default {
  title: 'entities/ArticleList/ArticleListItemList',
  component: ArticleListItemList,
  decorators: [StoreDecorator({})],
  args: articlesMockWithRandom(),
} as Meta<typeof ArticleListItemList>;

export const Default: StoryObj<typeof ArticleListItemList> = {};
