export const articlesMock1 = {
  id: '1',
  title: 'Post 11',
  subtitle: 'Subtitle post 1',
  img: 'https://picsum.photos/300/300',
  views: '2345',
  createdAt: '30.03.2024',
  types: ['IT', 'TRAVEL', 'ECONOMIC', 'MEDICINE'],
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
  user: {
    id: '1',
    username: 'SuperBuddy',
    avatar: 'https://picsum.photos/200/200',
  },
};

export const articlesMockWithRandom = () => ({
  id: `${Math.floor(Math.random() * (500 - 1 + 1) + 1)}`,
  title: 'Post 1',
  subtitle: 'Subtitle post 1',
  img: `https://picsum.photos/300/300?random=${Math.floor(Math.random() * (500 - 1 + 1) + 1)}`,
  views: '2345',
  createdAt: '30.03.2024',
  types: ['IT', 'TRAVEL', 'ECONOMIC', 'MEDICINE'],
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
  user: {
    id: '1',
    username: 'SuperBuddy',
    avatar: 'https://picsum.photos/200/200',
  },
});
