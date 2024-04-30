import { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ARTICLES_REQUEST_URL } from 'entities/Article/model/const/const';
import ArticleDetailsPage from './ArticleDetailsPage';

export default {
  title: 'pages/ArticleDetailsPage',
  component: ArticleDetailsPage,
  parameters: {
    withoutRouter: true,
    mockData: [
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
            {
              id: '4',
              type: 'CODE',
              title: 'Some title of code',
              code: 'export const FuncComponent: FC<FuncComponentProps> ='
                + ' ({ data }) => {\n  const preparedData = useMemo(() =>'
                + ' prepareData(dep1), [dep1]); // (1)\n  \n  return (\n   '
                + ' <div onClick={() => (dep1 = \'other string\')} /* 2 */>\n    \t... какой-то контент\n    </div>\n\t);\n};',
            },
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
} as Meta<typeof ArticleDetailsPage>;

export const Default: StoryObj<typeof ArticleDetailsPage> = {
  decorators: [StoreDecorator({}), (Story) => (
    <MemoryRouter
      initialEntries={['/articles/1']}
    >
      <Routes>
        <Route
          path="articles/:id"
          element={<Story />}
        />
      </Routes>
    </MemoryRouter>
  )],
};

export const Error: StoryObj<typeof ArticleDetailsPage> = {
  decorators: [StoreDecorator({}), (Story) => (
    <MemoryRouter
      initialEntries={['/articles']}
    >
      <Routes>
        <Route
          path="articles"
          element={<Story />}
        />
      </Routes>
    </MemoryRouter>
  )],
};
