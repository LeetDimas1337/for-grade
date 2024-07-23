import React from 'react';
import Button from 'shared/ui/button/Button.tsx';
import Heart from 'shared/svg/Heart.svg?react';
import Facebook from 'shared/svg/Facebook.svg?react';
import Twitter from 'shared/svg/Twitter.svg?react';
import ThreeDots from 'shared/svg/ThreeDots.svg?react';
import classes from './articleFooter.module.scss';
import RoundLink from 'shared/ui/round-link/RoundLink.tsx';

const ArticleFooter = (): JSX.Element => {
	return (
		<footer className={classes.footer}>
			<h2 className={classes.footer__heading}>
				Show Your Support
			</h2>
			<address>
				<Button
					count={<span style={{ color: '#FFC4C9' }}>42</span>}
					leftIcon={<Heart style={{ color: 'white' }}/>}
					style={{ backgroundColor: '#FF4F52' }}
				>
					Like it
				</Button>
				<Button
					count={<span style={{ color: '#BBC6FF' }}>42</span>}
					leftIcon={<Facebook style={{ color: 'white' }}/>}
					style={{ backgroundColor: '#4267B2' }}
				>
					Share
				</Button>
				<Button
					count={<span style={{ color: '#C5E4FC' }}>42</span>}
					leftIcon={<Twitter style={{ color: 'white' }}/>}
					style={{ backgroundColor: '#1DA1F2' }}
				>
					Tweet
				</Button>
				<RoundLink icon={<ThreeDots/>}/>
			</address>
		</footer>
	);
};

export default ArticleFooter;