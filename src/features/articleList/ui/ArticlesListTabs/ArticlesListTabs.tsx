import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { EArticleTypes } from '@/entities/Article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch.hook';
import { Tabs } from '@/shared/ui/Tabs/Tabs';
import { articlesListActions, fetchArticlesList } from '@/widgets/articleList';

import { getArticlesSearchText } from '../../model/selectors/articlesSearch.selectors';
import { articlesSearchActions } from '../../model/slices/articlesSearchSlice';

import styles from './ArticlesListTabs.module.scss';

export const ArticlesListTabs = memo(() => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const { type = EArticleTypes.ALL } = useSelector(getArticlesSearchText) || {};

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

  const onTypeClick = useCallback(({ value }: { value: EArticleTypes }) => {
    dispatch(articlesListActions.setPage(1));
    dispatch(articlesSearchActions.setType(value));
    dispatch(fetchArticlesList({ withSetAll: true }));
  }, [dispatch]);

  return <Tabs tabs={articleTypes} className={styles.tabs} tabClassName={styles.tab} onTabClick={onTypeClick} value={type} />;
});
