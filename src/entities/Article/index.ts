export { ArticleTextBlockComponent } from './ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
export { EArticleBlockType, type IArticleTextBlock } from './model/types/article';

export { articleDetailsReducer } from './model/slices/articleDetailsSlice';

export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
export { ArticleDetailsLoading } from './ui/ArticleDetailsLoading/ArticleDetailsLoading';
export { addArticleComment } from 'widgets/article/model/services/addArticleCommet';
export { fetchCommentsByArticleId } from 'widgets/article/model/services/fetchArticleCommets';
export { getArticleCommentsIsLoading } from 'widgets/article/model/selectors/articleComments.selectors';

export { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from './model/selectors/articleDetails.selectors';

export { fetchArticleById } from './model/services/fetchArticleById';

export { EArticleTypes } from './model/types/article';
export { type IArticleDetailsCommentsSchema } from 'widgets/article/model/types/articleDetailsCommentsSchema';
export { type IArticleDetailsSchema } from './model/types/articleDetailsSchema';
export { type IArticle, EArticlesView } from './model/types/article';
export { ArticleRoot } from 'widgets/article/ui/ArticleRoot/ArticleRoot';
export { articlesMockWithRandom } from './model/mock/articlesMock';
export { ARTICLES_REQUEST_URL } from './model/const/const';
