import React from 'react';
import Header from 'widgets/header/Header.tsx';
import Article from 'widgets/article/Article.tsx';
import RelatedArticles from 'widgets/related-articles/RelatedArticles.tsx';
import Comments from 'widgets/comments/Comments.tsx';
import Subscribe from 'widgets/subscribe/Subscribe.tsx';
import Footer from 'widgets/footer/Footer.tsx';

const App = (): JSX.Element => {
    return (
        <>
	        <Header/>
	        <main>
		        <Article/>
		        <RelatedArticles/>
		        <Comments/>
		        <Subscribe/>
			</main>
	        <Footer/>
        </>
    );
};

export default App;