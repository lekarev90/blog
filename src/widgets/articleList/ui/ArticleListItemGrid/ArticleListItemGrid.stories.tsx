import { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { articlesMockWithRandom } from '@/entities/Article';
import { ArticleListItemGrid } from './ArticleListItemGrid';

// @ts-ignore
export default {
  title: 'widgets/articleList/ArticleListItemGrid',
  component: ArticleListItemGrid,
  decorators: [StoreDecorator({})],
  args: articlesMockWithRandom(),
} as Meta<typeof ArticleListItemGrid>;

export const Default: StoryObj<typeof ArticleListItemGrid> = {};
