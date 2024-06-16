import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { useTranslation } from 'react-i18next';

import { EArticleTypes } from '@/entities/Article';
import { ArticlesListSort, ArticlesListTabs, articlesSearchActions } from '@/features/articleList';
import SearchIcon from '@/shared/assets/icons/search.svg';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch.hook';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { Card } from '@/shared/ui/redesigned/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Input } from '@/shared/ui/redesigned/Input';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

import { getArticlesSearchText } from '../../model/selectors/articlesSearch.selectors';
import { fetchArticlesList } from '../../model/services/fetchArticlesList';
import { articlesListActions } from '../../model/slices/articlesListSlice';

import styles from './ArticleListFilters.module.scss';

export const ArticleListFilters = () => {
  const { t } = useTranslation('articles');
  const dispatch = useAppDispatch();

  const { type = EArticleTypes.ALL } = useSelector(getArticlesSearchText) || {};
  const { text } = useSelector(getArticlesSearchText) || {};

  const fetchArticlesWithFullReset = useCallback(() => {
    dispatch(articlesListActions.setPage(1));
    dispatch(fetchArticlesList({ withSetAll: true }));
  }, [dispatch]);

  const onChangeSearchText = useDebounce(
    useCallback(
      (value) => {
        dispatch(articlesSearchActions.setSearch(value));
        fetchArticlesWithFullReset();
      },
      [dispatch, fetchArticlesWithFullReset],
    ),
    1000,
  );

  const onTypeClick = useCallback(
    ({ value }: { value: EArticleTypes }) => {
      dispatch(articlesSearchActions.setType(value));
      fetchArticlesWithFullReset();
    },
    [dispatch, fetchArticlesWithFullReset],
  );

  return (
    <VStack Component={Card} gap="32" padding="24" className={styles.container}>
      <Input
        wrapperClassName={styles.inputWrapper}
        name="search"
        placeholder={t('articles:search.placeholder')}
        onChange={onChangeSearchText}
        value={text}
        addonLeft={<Icon Svg={SearchIcon} />}
      />
      <VStack gap="8">
        <Text text={t('articles:sort.titleCommon')} />
        <ArticlesListSort onSwitchSort={fetchArticlesWithFullReset} />
      </VStack>
      <ArticlesListTabs onTabClick={onTypeClick} currentType={type} />
    </VStack>
  );
};
