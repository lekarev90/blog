import { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { articlesMockWithRandom } from '../../../../model/mock/articlesMock';
import { ArticleListItemGrid } from './ArticleListItemGrid';

export default {
  title: 'entities/ArticleList/ArticleListItemGrid',
  component: ArticleListItemGrid,
  decorators: [StoreDecorator({})],
  args: articlesMockWithRandom(),
} as Meta<typeof ArticleListItemGrid>;

export const Default: StoryObj<typeof ArticleListItemGrid> = {};
