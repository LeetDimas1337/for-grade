import React, { ReactNode } from 'react';
import classes from './comment.module.scss';
import dayjs from 'dayjs';
import CommentSvg from 'shared/svg/Comment.svg?react';
import ThumbSvg from 'shared/svg/Thumb.svg?react';
import cn from 'classnames';

export type CommentProps = {
	avatar: string
	nickName: string
	text: ReactNode
	likes: number
	isNested?: boolean
}

const Comment = ({
	avatar,
	likes,
	nickName,
	text,
	isNested
}: CommentProps): JSX.Element => {

	const today = dayjs().format('MMMM DD, h:mm a');
	return (
		<article className={cn(classes.commentContainer, isNested && classes.commentContainer_nested)}>
			<img className={classes.avatar} src={avatar} alt="аватарка"/>
			<div>
				<div className={classes.header}>
					<h3 className={classes.nickName}>
						{nickName}
					</h3>
					<time className={classes.date} dateTime={dayjs().toISOString()}>
						{today}
					</time>
				</div>
				<div className={classes.commentText}>
					{text}
				</div>
				<div className={classes.actionsContainer}>
					<button className={classes.replyButton}>
						<CommentSvg/>
						Reply
					</button>
					<div className={classes.likes}>
						<button><ThumbSvg style={{ transform: 'rotateZ(180deg)' }}/></button>
						<span
							className={cn(
								classes.likesCount,
								likes > 0 && classes.likesCount_positive,
								likes < 0 && classes.likesCount_negative
							)}
						>
							{likes > 0
								? `+${likes}`
								: likes
							}
						</span>
						<button><ThumbSvg/></button>
					</div>
				</div>
			</div>
		</article>
	);
};

export default Comment;