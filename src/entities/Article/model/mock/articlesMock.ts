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
        "That's first paragraphs",
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

const types = ['IT', 'TRAVEL', 'ECONOMIC', 'MEDICINE', 'POLITICS', 'SPORT'];

interface IArticle {
  title: string;
  subTitle: string;
  types: string[];
}

const getTypesWithoutDuplicates = () => new Array(Math.floor(Math.random() * (types.length - 1 - 1 + 1) + 1)).fill(0).reduce(
  (acc) => {
    const el = types[Math.floor(Math.random() * (types.length - 1 - 1 + 1) + 1)];
    if (!acc.types[el]) {
      acc.result.push(el);
      acc.types[el] = el;
    }

    return acc;
  },
  {
    types: {},
    result: [],
  },
);

const articles: Record<number, IArticle> = {
  1: {
    title: 'AI в медицине',
    subTitle: 'Как ИИ изменяет лечение',
    types: ['IT', 'MEDICINE'],
  },
  2: {
    title: 'Путешествия и экономика',
    subTitle: 'Влияние туризма на экономику',
    types: ['TRAVEL', 'ECONOMIC'],
  },
  3: {
    title: 'Рыночные тенденции',
    subTitle: 'Как экономические изменения влияют на биржу',
    types: ['ECONOMIC'],
  },
  4: {
    title: 'Вакцины и политика',
    subTitle: 'Политические аспекты вакцинации',
    types: ['MEDICINE', 'POLITICS'],
  },
  5: {
    title: 'Спорт и здоровье',
    subTitle: 'Влияние спорта на общественное здоровье',
    types: ['SPORT', 'MEDICINE'],
  },
  6: {
    title: 'Технологии в спорте',
    subTitle: 'Применение новых технологий в спортивных состязаниях',
    types: ['IT', 'SPORT'],
  },
  7: {
    title: 'Безопасность в путешествиях',
    subTitle: 'Технологические решения для безопасных путешествий',
    types: ['IT', 'TRAVEL'],
  },
  8: {
    title: 'Париж и его экономика',
    subTitle: 'Экономическое влияние туризма в Париже',
    types: ['TRAVEL', 'ECONOMIC'],
  },
  9: {
    title: 'Экономика здоровья',
    subTitle: 'Финансовые аспекты здравоохранения',
    types: ['ECONOMIC', 'MEDICINE'],
  },
  10: {
    title: 'Политика в спорте',
    subTitle: 'Как политика влияет на спортивные соревнования',
    types: ['POLITICS', 'SPORT'],
  },
  11: {
    title: 'IT и экология',
    subTitle: 'Технологии для устойчивого развития',
    types: ['IT', 'ECONOMIC'],
  },
  12: {
    title: 'Марафоны мира',
    subTitle: 'Как путешествовать и участвовать в марафонах',
    types: ['TRAVEL', 'SPORT'],
  },
  13: {
    title: 'Финтех революция',
    subTitle: 'Изменения в банковской системе благодаря IT',
    types: ['IT', 'ECONOMIC'],
  },
  14: {
    title: 'Туризм и здоровье',
    subTitle: 'Влияние путешествий на психическое здоровье',
    types: ['TRAVEL', 'MEDICINE'],
  },
  15: {
    title: 'Экономическая стабильность',
    subTitle: 'Меры правительства для поддержки экономики',
    types: ['ECONOMIC', 'POLITICS'],
  },
  16: {
    title: 'Наука о данных в спорте',
    subTitle: 'Как аналитика меняет спортивные стратегии',
    types: ['IT', 'SPORT'],
  },
  17: {
    title: 'Политика здравоохранения',
    subTitle: 'Новые реформы и их влияние',
    types: ['MEDICINE', 'POLITICS'],
  },
  18: {
    title: 'IT в образовании',
    subTitle: 'Цифровые инструменты для улучшения обучения',
    types: ['IT', 'EDUCATION'],
  },
  19: {
    title: 'Путешествие в Антарктику',
    subTitle: 'Экспедиции в крайний юг',
    types: ['TRAVEL'],
  },
  20: {
    title: 'Экономика образования',
    subTitle: 'Инвестиции в будущее образование',
    types: ['ECONOMIC', 'EDUCATION'],
  },
  21: {
    title: 'Пандемия и политика',
    subTitle: 'Уроки для глобальной политики здравоохранения',
    types: ['MEDICINE', 'POLITICS'],
  },
  22: {
    title: 'Эволюция в спорте',
    subTitle: 'Как технологии меняют игру',
    types: ['SPORT', 'IT'],
  },
  23: {
    title: 'Культурный туризм',
    subTitle: 'Исследование культурных путешествий',
    types: ['TRAVEL'],
  },
  24: {
    title: 'Блокчейн и экономика',
    subTitle: 'Влияние криптовалют на глобальные рынки',
    types: ['IT', 'ECONOMIC'],
  },
  25: {
    title: 'Медицина будущего',
    subTitle: 'Как технологии трансформируют лечение',
    types: ['MEDICINE', 'IT'],
  },
  26: {
    title: 'Политические санкции',
    subTitle: 'Экономические последствия глобальных санкций',
    types: ['POLITICS', 'ECONOMIC'],
  },
  27: {
    title: 'Технологии и туризм',
    subTitle: 'Инновации для путешественников',
    types: ['IT', 'TRAVEL'],
  },
  28: {
    title: 'Спортивная фармакология',
    subTitle: 'Использование медицины в профессиональном спорте',
    types: ['MEDICINE', 'SPORT'],
  },
  29: {
    title: 'Политика и технологии',
    subTitle: 'Как законодательство влияет на инновации',
    types: ['POLITICS', 'IT'],
  },
  30: {
    title: 'Экономические стратегии',
    subTitle: 'Планирование развития в кризисные времена',
    types: ['ECONOMIC'],
  },
  31: {
    title: 'Путешествия по России',
    subTitle: 'Открытие неизведанных уголков страны',
    types: ['TRAVEL'],
  },
  32: {
    title: 'Спорт и общество',
    subTitle: 'Влияние спортивных мероприятий на культуру',
    types: ['SPORT', 'SOCIAL'],
  },
  33: {
    title: 'IT стартапы',
    subTitle: 'Как молодые компании меняют рынок',
    types: ['IT', 'BUSINESS'],
  },
  34: {
    title: 'Путешествие в космос',
    subTitle: 'Туризм на новом фронтире',
    types: ['TRAVEL', 'SCIENCE'],
  },
  35: {
    title: 'Здоровье нации',
    subTitle: 'Программы улучшения здоровья населения',
    types: ['MEDICINE', 'SOCIAL'],
  },
  36: {
    title: 'Политика и образование',
    subTitle: 'Влияние политики на систему образования',
    types: ['POLITICS', 'EDUCATION'],
  },
  37: {
    title: 'Спорт и лидерство',
    subTitle: 'Как спорт формирует лидерские качества',
    types: ['SPORT', 'BUSINESS'],
  },
  38: {
    title: 'Кибербезопасность',
    subTitle: 'Защита данных в цифровую эпоху',
    types: ['IT', 'SECURITY'],
  },
  39: {
    title: 'Туризм и экология',
    subTitle: 'Сохранение природы во время путешествий',
    types: ['TRAVEL', 'ENVIRONMENT'],
  },
  40: {
    title: 'Экономика и инновации',
    subTitle: 'Технологическое влияние на экономический рост',
    types: ['ECONOMIC', 'TECHNOLOGY'],
  },
  41: {
    title: 'Медицинская этика',
    subTitle: 'Моральные дилеммы в современной медицине',
    types: ['MEDICINE', 'ETHICS'],
  },
  42: {
    title: 'Политический кризис',
    subTitle: 'Как управлять государством в условиях нестабильности',
    types: ['POLITICS'],
  },
  43: {
    title: 'Спорт и психология',
    subTitle: 'Психологические аспекты профессионального спорта',
    types: ['SPORT', 'PSYCHOLOGY'],
  },
  44: {
    title: 'Глобальное потепление',
    subTitle: 'Как изменения климата влияют на экономику',
    types: ['ENVIRONMENT', 'ECONOMIC'],
  },
  45: {
    title: 'IT и глобализация',
    subTitle: 'Влияние технологий на мировую интеграцию',
    types: ['IT', 'GLOBAL'],
  },
  46: {
    title: 'Туристические тренды',
    subTitle: 'Что будет популярно в следующем году',
    types: ['TRAVEL', 'TRENDS'],
  },
  47: {
    title: 'Экономика и здоровье',
    subTitle: 'Финансовое состояние здравоохранения',
    types: ['ECONOMIC', 'HEALTH'],
  },
  48: {
    title: 'Политика и технологии',
    subTitle: 'Регулирование технологического прогресса',
    types: ['POLITICS', 'TECHNOLOGY'],
  },
  49: {
    title: 'Спорт и наука',
    subTitle: 'Научные подходы в тренировках',
    types: ['SPORT', 'SCIENCE'],
  },
  50: {
    title: 'Путешествие и культура',
    subTitle: 'Изучение культур через туризм',
    types: ['TRAVEL', 'CULTURE'],
  },
};

const createdAt = `${String(Math.floor(Math.random() * (30 - 1 + 1) + 1)).padStart(2, '0')}.${String(
  Math.floor(Math.random() * (12 - 1 + 1) + 1),
).padStart(2, '0')}.${Math.floor(Math.random() * (2024 - 2020 + 1) + 2020)}`;

export const articlesMockWithRandom = () => ({
  id: `${Math.floor(Math.random() * (5000 - 1 + 1) + 1)}`,
  title: 'Post 1',
  subtitle: 'Subtitle post 1',
  img: `https://picsum.photos/300/300?random=${Math.floor(Math.random() * (5000 - 1 + 1) + 1)}`,
  views: Math.floor(Math.random() * (1000 - 300 + 1) + 300),
  createdAt,
  types: getTypesWithoutDuplicates().result,
  blocks: [
    {
      id: '1',
      type: 'TEXT',
      title: 'Some title of block',
      paragraphs: [
        "That's first paragraphs",
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

const articlesMockWithRandomWithParams = (title: string, subtitle: string, types: string[]) => ({
  id: `${Math.floor(Math.random() * (5000 - 1 + 1) + 1)}`,
  title,
  subtitle,
  img: `https://picsum.photos/300/300?random=${Math.floor(Math.random() * (5000 - 1 + 1) + 1)}`,
  views: Math.floor(Math.random() * (1000 - 300 + 1) + 300),
  createdAt,
  types,
  blocks: [
    {
      id: '1',
      type: 'TEXT',
      title: 'Some title of block',
      paragraphs: [
        "That's first paragraphs",
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
  userId: Math.floor(Math.random() * (3 - 1 + 1) + 1),
});

export const getArticlesMockWithRandomWithParams = (length = 50) => new Array(length).fill(0).map((_, index) => {
  const { title } = articles[index + 1];
  const { subTitle } = articles[index + 1];
  const { types } = articles[index + 1];

  return articlesMockWithRandomWithParams(title, subTitle, types);
});
