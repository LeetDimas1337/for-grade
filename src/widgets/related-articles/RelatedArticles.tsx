import React from 'react';
import ArticleCard from 'shared/ui/article-card/ArticleCard.tsx';
import classes from './relatedArticles.module.scss';

const RelatedArticles = (): JSX.Element => {
	return (
		<section className={classes.container}>
			<ArticleCard
				title={'An Evangelist of Singaporean Food Has a New Pulpit'}
				alt={''}
				comments={'82'}
				views={'1,904'}
				imgSrc={'public/article2.png'}
			/>
			<ArticleCard
				title={<>At the Mouth of the Mississippi,<br/>a Weird and Fragile Beauty</>}
				alt={''}
				comments={'145'}
				views={'2,873'}
				imgSrc={'public/article4.png'}
			/>
			<ArticleCard
				title={'Chattanooga Is Changing. But Its Charms Remain.'}
				alt={''}
				comments={'33'}
				views={'1,768'}
				imgSrc={'public/article3.png'}
			/>
			<ArticleCard
				title={'How to Get by in a Country if You Don’t Know the Language'}
				alt={''}
				comments={'52'}
				views={'1,904'}
				imgSrc={'public/article1.png'}
			/>
		</section>
	);
};

export default RelatedArticles;