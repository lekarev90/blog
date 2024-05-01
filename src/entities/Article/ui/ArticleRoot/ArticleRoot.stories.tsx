import { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { ArticleRoot } from './ArticleRoot';
import { ARTICLES_COMMENT_REQUEST_URL, ARTICLES_REQUEST_URL } from '../../model/const/const';

export default {
  title: 'entities/ArticleRoot',
  component: ArticleRoot,
  decorators: [StoreDecorator({})],
  parameters: {
    mockData: [
      {
        url: `${__API__}${ARTICLES_COMMENT_REQUEST_URL}?articleId=1&_expand=user`,
        method: 'GET',
        status: 200,
        response: [
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
        ],
      },
      {
        url: `${__API__}${ARTICLES_REQUEST_URL}/1`,
        method: 'GET',
        status: 200,
        response: {
          id: '1',
          title: 'Post 1',
          subtitle: 'Subtitle post 1',
          img: 'https://picsum.photos/200',
          views: '2345',
          createdAt: '30.03.2024',
          type: ['IT'],
          blocks: [
            {
              id: '1',
              type: 'TEXT',
              title: 'Some title of block',
              paragraphs: [
                'That\'s first paragraphs',
                'Entire any had depend and figure winter. '
                + 'Change stairs and men likely wisdom new happen piqued six. Now taken him timed sex world get.',
                'Enjoyed married an feeling delight pursuit '
                + 'as offered. As admire roused length likely played pretty to no. Means had joy miles her merry solid order.',
                'Conveying or northward offending admitting perfectly '
                + 'my. Colonel gravity get thought fat smiling add but. Wonder twenty hunted and put income set desire expect.',
                'Am cottage calling my is mistake cousins talking up.'
                + ' Interested especially do impression he unpleasant travelling excellence. All few our knew time done draw ask.',
              ],
            },
          ],
        },
      },
      {
        url: `${__API__}${ARTICLES_REQUEST_URL}/2`,
        method: 'GET',
        status: 200,
        response: {
          id: '1',
          title: 'Post 1',
          subtitle: 'Subtitle post 1',
          img: 'https://picsum.photos/200',
          views: '2345',
          createdAt: '30.03.2024',
          type: ['IT'],
          blocks: [
            {
              id: '4',
              type: 'CODE',
              title: 'Some title of code',
              code: 'export const FuncComponent: FC<FuncComponentProps> ='
                + ' ({ data }) => {\n  const preparedData = useMemo(() =>'
                + ' prepareData(dep1), [dep1]); // (1)\n  \n  return (\n   '
                + ' <div onClick={() => (dep1 = \'other string\')} /* 2 */>\n    \t... какой-то контент\n    </div>\n\t);\n};',
            },
          ],
        },
      },
      {
        url: `${__API__}${ARTICLES_REQUEST_URL}/3`,
        method: 'GET',
        status: 200,
        response: {
          id: '1',
          title: 'Post 1',
          subtitle: 'Subtitle post 1',
          img: 'https://picsum.photos/200',
          views: '2345',
          createdAt: '30.03.2024',
          type: ['IT'],
          blocks: [
            {
              id: '5',
              type: 'IMAGE',
              src: 'https://picsum.photos/700/400',
              title: 'image title',
            },
          ],
        },
      },
    ],
  },
} as Meta<typeof ArticleRoot>;

export const Text: StoryObj<typeof ArticleRoot> = {
  args: {
    id: '1',
  },
};

export const Code: StoryObj<typeof ArticleRoot> = {
  args: {
    id: '2',
  },
};

export const Image: StoryObj<typeof ArticleRoot> = {
  args: {
    id: '3',
  },
};