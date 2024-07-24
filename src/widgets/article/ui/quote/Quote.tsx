import React from 'react';
import classes from './quote.module.scss';
import QuoteMark from 'shared/svg/QuoteMark.svg?react';

const Quote = (): JSX.Element => {
	return (
		<blockquote className={classes.container}>
			<div className={classes.quoteMark}>
				<QuoteMark/>
			</div>
			<p className={classes.text}>
				Names of places... are not geography... know by heart a whole gazetteer full of them would not, in
				itself, constitute anyone a geographer. Geography has higher aims than this: it seeks to classify
				phenomena.
			</p>
			<div className={classes.userInfo}>
				<img src="public/avatar1.png" alt="Паренек" className={classes.userInfo__avatar}/>
				<div className={classes.userInfo__text}>
					<span className={classes.userInfo__text_primary}>
						William Peterson
					</span>
					<span className={classes.userInfo__text_secondary}>
						Travel Agent
					</span>
				</div>
			</div>
		</blockquote>
	);
};

export default Quote;