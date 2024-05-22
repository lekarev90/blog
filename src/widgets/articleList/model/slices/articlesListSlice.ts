import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IStateSchema } from '@/app/providers/StoreProvider';

import { EArticlesView, IArticle } from '@/entities/Article';
import { ARTICLES_LIST_VIEW_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

import { ARTICLES_LIST_DATA } from '../helpers/helpers';
import { IArticlesListSchema } from '../types/articlesListSchema';
import { fetchArticlesList } from '../services/fetchArticlesList';

const articlesListAdapter = createEntityAdapter({
  selectId: (comment: IArticle) => comment.id,
});

const initialState = articlesListAdapter.getInitialState<IArticlesListSchema>({
  isLoading: false,
  ids: [],
  error: undefined,
  entities: {},
  page: 0,
  hasMore: true,
  articlesView: EArticlesView.LIST,
  quantityLimit: ARTICLES_LIST_DATA[EArticlesView.LIST].SKELETON_QUANTITY,
  _inited: false,
});

export const getArticles = articlesListAdapter.getSelectors<IStateSchema>(
  (state) => state.articlesList || initialState,
);

const articlesListSlice = createSlice({
  name: 'articlesListSlice',
  initialState,
  reducers: {
    init: (state) => {
      const initialArticleListView = (localStorage.getItem(ARTICLES_LIST_VIEW_LOCALSTORAGE_KEY) as EArticlesView) || EArticlesView.LIST;
      const quantityLimit = ARTICLES_LIST_DATA[initialArticleListView].SKELETON_QUANTITY;

      state.articlesView = initialArticleListView;
      state.quantityLimit = quantityLimit;
      state._inited = true;
    },
    setArticlesView: (state, action: PayloadAction<EArticlesView>) => {
      const quantityLimit = ARTICLES_LIST_DATA[action.payload].SKELETON_QUANTITY;
      localStorage.setItem(ARTICLES_LIST_VIEW_LOCALSTORAGE_KEY, action.payload);
      state.articlesView = action.payload;
      state.quantityLimit = quantityLimit;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setHasMore: (state, action: PayloadAction<boolean>) => {
      state.hasMore = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;

        const { withSetAll } = action.meta.arg || {};

        if (withSetAll) {
          articlesListAdapter.removeAll(state);
        }
      })
      .addCase(fetchArticlesList.fulfilled, (state, action) => {
        state.error = undefined;
        state.isLoading = false;

        state.hasMore = action.payload.length >= state.quantityLimit;

        const { withSetAll } = action.meta.arg || {};

        const adapterMethod = withSetAll ? 'setAll' : 'addMany';

        articlesListAdapter[adapterMethod](state, action.payload);
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { actions: articlesListActions } = articlesListSlice;
export const { reducer: articlesListReducer } = articlesListSlice;
