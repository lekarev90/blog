## Запуск проекта

```
yarn - устанавливаем зависимости
yarn run start:dev или yarn run start:dev:vite - запуск сервера + frontend проекта в dev режиме
```

----

## Скрипты

- `yarn start` - Запуск frontend проекта на webpack dev server
- `yarn run start:vite` - Запуск frontend проекта на vite
- `yarn run start:dev` - Запуск frontend проекта на webpack dev server + backend
- `yarn run start:dev:vite` - Запуск frontend проекта на vite + backend
- `yarn run start:dev:server` - Запуск backend сервера
- `yarn run build:prod` - Сборка в prod режиме
- `yarn run build:dev` - Сборка в dev режиме (не минимизирован)
- `yarn run lint:ts` - Проверка ts файлов линтером
- `yarn run lint:ts:fix` - Исправление ts файлов линтером
- `yarn run lint:scss` - Проверка scss файлов style линтером
- `yarn run lint:scss:fix` - Исправление scss файлов style линтером
- `yarn run test:unit` - Запуск unit тестов с jest

[//]: # (- `yarn test:ui` - Хапуск скриншотных тестов с loki)

[//]: # (- `yarn test:ui:ok` - Подтверждение новых скриншотов)

[//]: # (- `yarn test:ui:ci` - Запуск скриншотных тестов в CI)

[//]: # (- `yarn test:ui:report` - Генерация полного отчета для скриншотных тестов)

[//]: # (- `yarn test:ui:json` - Генерация json отчета для скриншотных тестов)

[//]: # (- `yarn test:ui:html` - Генерация HTML отчета для скриншотных тестов)

- `yarn run storybook` - запуск Storybook
- `yarn run storybook:build` - Сборка storybook билда
- `yarn run prepare` - прекоммит хуки
- `yarn run generate:slice` - Скрипт для генерации FSD слайсов

----

## Архитектура проекта

Проект написан в соответствии с методологией Feature sliced design

Ссылка на документацию - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Работа с переводами

В проекте используется библиотека i18next для работы с переводами.
Файлы с переводами хранятся в public/locales.

Для комфортной работы рекомендуем установить плагин для webstorm/vscode

Документация i18next - [https://react.i18next.com/](https://react.i18next.com/)

----

## Тесты

В проекте используются 2 вида тестов:

1) Обычные unit тесты на jest - `yarn run test:unit`
2) Тесты на компоненты с React testing library -`yarn run test:unit`

[//]: # (3&#41; Скриншотное тестирование с loki `npm run test:ui`)

[//]: # (4&#41; e2e тестирование с Cypress `npm run test:e2e`)

Подробнее о тестах - [документация тестирование](/docs/tests.md)

----

## Линтинг

В проекте используется eslint для проверки typescript кода и stylelint для проверки файлов со стилями.

Также для строгого контроля главных архитектурных принципов
используется собственный eslint plugin *eslint-plugin-lekarev*,
который содержит 3 правила

1) path-checker - запрещает использовать абсолютные импорты в рамках одного модуля
2) layer-imports - проверяет корректность использования слоев с точки зрения FSD
   (например widgets нельзя использовать в features и entitites)
3) public-api-imports - разрешает импорт из других модулей только из public api. Имеет auto fix

##### Запуск линтеров

- `yarn run lint:ts` - Проверка ts файлов линтером
- `yarn run lint:ts:fix` - Исправление ts файлов линтером
- `yarn run lint:scss` - Проверка scss файлов style линтером
- `yarn run lint:scss:fix` - Исправление scss файлов style линтером

----

## Storybook

В проекте для каждого компонента описываются стори-кейсы.
Запросы на сервер мокаются с помощью storybook-addon-mock.

Файл со сторикейсами создает рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой:

- `yarn run storybook`

Подробнее о [Storybook](/docs/storybook.md)

Пример:

```typescript jsx
import { Meta, StoryObj } from '@storybook/react';

import { ECountrySchema } from '@/entities/Country';
import { ECurrency } from '@/entities/Currency';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import ProfilePage from './ProfilePage';

const url = `${__API__}/profile/1`;

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  decorators: [StoreDecorator({})],
  parameters: {
    mockData: [
      {
        url,
        method: 'GET',
        status: 200,
        response: {
          firstName: 'Andrew2',
          lastName: 'Ducalis',
          age: '25',
          currency: ECurrency.EUR,
          country: ECountrySchema.USA,
          city: 'Moscow',
          username: 'Ducalis2000',
          avatar: 'https://img.freepik.com/premium-photo/a-cat-wearing-sunglasses-and-a-hat-that-says-cat-on-it_924318-283.jpg',
        },
      },
    ],
  },
} as Meta<typeof ProfilePage>;

type Story = StoryObj<typeof ProfilePage>;

export const Default: Story = {};

export const Loading: Story = {
  parameters: {
    mockData: [
      {
        url,
        method: 'GET',
        status: 200,
        delay: 10000 * 10000,
        response: {},
      },
    ],
  },
};

```

----

## Конфигурация проекта

Для разработки проект содержит 2 конфига:

1. Webpack - ./config/build
2. vite - vite.config.ts

Оба сборщика адаптированы под основные фичи приложения.

Вся конфигурация хранится в /config

- /config/babel - babel
- /config/build - конфигурация webpack
- /config/jest - конфигурация тестовой среды
- /config/storybook - конфигурация сторибука

В папке `scripts` находятся различные скрипты для рефакторинга\упрощения написания кода\генерации отчетов и тд.

----

## CI pipeline и pre commit хуки

Конфигурация github actions находится в /.github/workflows.
В ci прогоняются все виды тестов, сборка проекта и сторибука, линтинг.

В прекоммит хуках проверяем проект линтерами, конфиг в /.husky

----

### Работа с данными

Взаимодействие с данными осуществляется с помощью redux toolkit.
По возможности переиспользуемые сущности необходимо нормализовать с помощью EntityAdapter

Запросы на сервер отправляются с помощью [RTK query](/src/shared/api/rtkApi.ts)

Для асинхронного подключения редюсеров (чтобы не тянуть их в общий бандл) используется
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

----

### Работа с feature-flags

Разрешено использование feature flags только с помощью хелпера toggleFeatures

в него передается объект с опциями

{
  name: название фича-флага,
  on: функция, которая отработает после Включения фичи
  of: функция, которая отработает после ВЫключения фичи
}

Для автоматического удаления фичи использовать скрипт remove-feature.ts,
который принимает 2 аргумента

1. Название удаляемого фича-флага
2. Состояние (on\off)

----

## Сущности (entities)

- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Counter](/src/entities/Counter)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/Notification)
- [Rating](/src/entities/Rating)
- [User](/src/entities/User)

## Фичи (features)

- [addCommentForm](/src/features/addCommentForm)
- [articleList](/src/features/articleList)
- [articleRating](/src/features/articleRating)
- [articleRecommendationsList](/src/features/articleRecommendationsList)
- [authByUsername](/src/features/authByUsername)
- [editableProfileCard](/src/features/editableProfileCard)
- [navbar](/src/features/navbar)
