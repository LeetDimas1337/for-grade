import React, { Fragment } from 'react';
import classes from './comments.module.scss';
import Header from 'widgets/comments/ui/header/Header.tsx';
import Divider from 'widgets/comments/ui/divider/Divider.tsx';
import Comment from 'widgets/comments/ui/comment/Comment.tsx';
import Loading from 'shared/svg/Loading.svg?react';
import { comments } from 'widgets/comments/lib/consts.tsx';
import AddComment from 'widgets/comments/ui/add-comment/AddComment.tsx';

const Comments = (): JSX.Element => {
	return (
		<section className={classes.commentsContainer}>
			<Header/>
			<Divider/>
			{comments.map((comment, index) =>
				<Fragment key={index}>
					<Comment {...comment}/>
					{index !== comments.length - 1 &&
                        <Divider/>
					}

				</Fragment>
			)}
			<button className={classes.loadMoreButton}>
				<Loading/>
				Load more
			</button>
			<AddComment/>
		</section>
	);
};

export default Comments;