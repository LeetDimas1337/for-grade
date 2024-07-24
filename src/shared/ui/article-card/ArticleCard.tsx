import React, { ReactNode } from 'react';
import Eye from 'shared/svg/Eye.svg?react';
import Comment from 'shared/svg/Comment.svg?react';
import classes from './articleCard.module.scss';

type ArticleCardProps = {
	imgSrc: string
	alt: string
	title: ReactNode
	views: string
	comments: string
}

const ArticleCard = ({ imgSrc, title, comments, views, alt }: ArticleCardProps): JSX.Element => {
	return (
		<div className={classes.container}>
			<a href="">
				<img src={imgSrc} alt={alt} className={classes.picture}/>
				<h2 className={classes.articleName}>
					{title}
				</h2>
			</a>
			<div className={classes.footer}>
				<div className={classes.footer__iconWithText}>
					<Eye style={{ color: '#BCBFC2' }}/>
					{views}
				</div>
				<div className={classes.footer__iconWithText}>
					<Comment style={{ color: '#BCBFC2' }}/>
					{comments}
				</div>
			</div>
		</div>
	);
};

export default ArticleCard;