import React from 'react';
import ArticleHead from 'widgets/article/ui/article-head/ArticleHead.tsx';
import ArticleContent from 'widgets/article/ui/article-content/ArticleContent.tsx';
import ArticleFooter from 'widgets/article/ui/article-footer/ArticleFooter.tsx';

const Article = (): JSX.Element => {
	return (
		<article>
			<ArticleHead/>
			<ArticleContent/>
			<ArticleFooter/>
		</article>
	);
};

export default Article;