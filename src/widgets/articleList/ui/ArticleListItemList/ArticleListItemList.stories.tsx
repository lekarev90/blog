import { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { articlesMockWithRandom } from '@/entities/Article';
import { ArticleListItemList } from './ArticleListItemList';

// @ts-ignore
export default {
  title: 'widgets/articleList/ArticleListItemList',
  component: ArticleListItemList,
  decorators: [StoreDecorator({})],
  args: articlesMockWithRandom(),
} as Meta<typeof ArticleListItemList>;

export const Default: StoryObj<typeof ArticleListItemList> = {};
