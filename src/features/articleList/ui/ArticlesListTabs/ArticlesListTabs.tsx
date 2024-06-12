import { memo, useMemo } from 'react';

import { useTranslation } from 'react-i18next';

import { EArticleTypes } from '@/entities/Article';
import { Tabs } from '@/shared/ui/Tabs';

import styles from './ArticlesListTabs.module.scss';

interface IArticlesListTabsProps {
  currentType: EArticleTypes;
  onTabClick: ({ value }: { value: EArticleTypes }) => void;
}

export const ArticlesListTabs = memo(({ currentType, onTabClick }: IArticlesListTabsProps) => {
  const { t } = useTranslation();

  const articleTypes = useMemo<{ value: EArticleTypes; content: string }[]>(
    () => [
      {
        value: EArticleTypes.ALL,
        content: t('articles:types.all'),
      },
      {
        value: EArticleTypes.IT,
        content: t('articles:types.it'),
      },
      {
        value: EArticleTypes.MEDICINE,
        content: t('articles:types.medicine'),
      },
      {
        value: EArticleTypes.TRAVEL,
        content: t('articles:types.travel'),
      },
      {
        value: EArticleTypes.ECONOMIC,
        content: t('articles:types.economic'),
      },
      {
        value: EArticleTypes.POLITICS,
        content: t('articles:types.politics'),
      },
      {
        value: EArticleTypes.SPORT,
        content: t('articles:types.sport'),
      },
      {
        value: EArticleTypes.EDUCATION,
        content: t('articles:types.education'),
      },
      {
        value: EArticleTypes.BUSINESS,
        content: t('articles:types.business'),
      },
      {
        value: EArticleTypes.SECURITY,
        content: t('articles:types.security'),
      },
      {
        value: EArticleTypes.ETHICS,
        content: t('articles:types.ethics'),
      },
      {
        value: EArticleTypes.SOCIAL,
        content: t('articles:types.social'),
      },
      {
        value: EArticleTypes.PSYCHOLOGY,
        content: t('articles:types.psychology'),
      },
      {
        value: EArticleTypes.ENVIRONMENT,
        content: t('articles:types.environment'),
      },
      {
        value: EArticleTypes.TECHNOLOGY,
        content: t('articles:types.technology'),
      },
      {
        value: EArticleTypes.HEALTH,
        content: t('articles:types.health'),
      },
      {
        value: EArticleTypes.GLOBAL,
        content: t('articles:types.global'),
      },
      {
        value: EArticleTypes.TRENDS,
        content: t('articles:types.trends'),
      },
      {
        value: EArticleTypes.SCIENCE,
        content: t('articles:types.science'),
      },
      {
        value: EArticleTypes.CULTURE,
        content: t('articles:types.culture'),
      },
    ],
    [t],
  );

  return <Tabs tabs={articleTypes} className={styles.tabs} tabClassName={styles.tab} onTabClick={onTabClick} value={currentType} />;
});
