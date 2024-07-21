import React from 'react';
import Header from 'widgets/header/Header.tsx';
import Article from 'widgets/article/Article.tsx';
import RelatedArticles from 'widgets/related-articles/RelatedArticles.tsx';

const App = (): JSX.Element => {
    return (
        <>
	        <Header/>
	        <main>
		        <Article/>
		        <RelatedArticles/>
			</main>
        </>
    );
};

export default App;