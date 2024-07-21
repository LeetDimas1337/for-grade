import React from 'react';
import classes from './accountInfo.module.scss';
import Facebook from 'shared/svg/Facebook.svg?react';
import Twitter from 'shared/svg/Twitter.svg?react';
import Instagram from 'shared/svg/Instagram.svg?react';
import RoundLink from 'shared/ui/round-link/RoundLink.tsx';

const AccountInfo = (): JSX.Element => {
	return (
		<aside className={classes.accountInfo}>
			<img src="public/avatar1.png" alt="Аватарка" className={classes.avatar}/>
			<span className={classes.username}>
				Mira Anderson
			</span>
			<span className={classes.business}>
				Traveler & Photographer
			</span>
			<span className={classes.info}>
				82 articles
			</span>
			<div className={classes.icons}>
				<RoundLink icon={<Facebook style={{ color: '#BCBFC2' }}/>}/>
				<RoundLink icon={<Twitter style={{ color: '#BCBFC2' }}/>}/>
				<RoundLink icon={<Instagram style={{ color: '#BCBFC2' }}/>}/>
			</div>
			<a href="" className={classes.footer}>
				Follow on Universal
			</a>
		</aside>
	);
};

export default AccountInfo;