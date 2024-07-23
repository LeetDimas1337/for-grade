import React from 'react';
import classes from './articleHead.module.scss';
import Home from 'shared/svg/Home.svg?react';
import Arrow from 'shared/svg/Arrow.svg?react';
import Share from 'shared/svg/Share.svg?react';
import Clock from 'shared/svg/Clock.svg?react';
import Heart from 'shared/svg/Heart.svg?react';
import Comment from 'shared/svg/Comment.svg?react';
import Bookmark from 'shared/svg/Bookmark.svg?react';
import ButtonWithIcon from 'widgets/article/ui/button-with-icon/ButtonWithIcon.tsx';
import Button from 'shared/ui/button/Button.tsx';
import dayjs from 'dayjs';
import AccountInfo from 'widgets/article/ui/account-info/AccountInfo.tsx';

const ArticleHead = (): JSX.Element => {

	const today = dayjs().format('MMM D, hh:mm a');

	return (
		<header className={classes.articleHead}>
			<div className={classes.articleHead__relativeWrapper}>
				<div className={classes.header}>
					<a href="" className={classes.header__categoryLink}>
						Destinations
					</a>
					<div className={classes.header__navButtons}>
						<ButtonWithIcon leftIcon={<Home/>} text={'Back to main'}/>
						<div className={classes.header__arrows}>
							<ButtonWithIcon
								leftIcon={<Arrow/>}
								text={'Prev'}
							/>
							<ButtonWithIcon
								rightIcon={
									<Arrow style={{ transform: 'rotateY(180deg)' }}/>
								}
								text={'Next'}
							/>
						</div>
					</div>
				</div>
				<h1 className={classes.heading}>
					<button className={classes.heading__bookmark}>
						<Bookmark/>
					</button>
					Five Travel Stories From 2017 to Help You Escape <br/> Into the World
				</h1>
				<div className={classes.subheader}>
					From the coastlines of Europe to remote Kodiak Island, Alaska, here are five of our favorite stories
					to
					help you explore the world
				</div>
				<div className={classes.footer}>
					<div className={classes.footer__smallInfo}>
						<time
							className={classes.footer_iconWithText}
							dateTime={dayjs().toISOString()}
						>
							<Clock/>
							{today}
						</time>
						<div className={classes.footer_iconWithText}>
							<Heart style={{ color: 'white', opacity: '0.4' }}/>
							830
						</div>
						<div className={classes.footer_iconWithText}>
							<Comment style={{ color: 'white', opacity: '0.4' }}/>
							19
						</div>
					</div>
					<Button
						style={{
							border: '1px solid rgba(255,255,255,0.4)',
						}}
						leftIcon={<Share/>}
					>

						142 shares
					</Button>
				</div>
				<div style={{ position: 'absolute', right: 1, bottom: -330 }}>
					<AccountInfo/>
				</div>
			</div>

		</header>
	);
};

export default ArticleHead;