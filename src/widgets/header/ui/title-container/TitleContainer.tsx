import React from 'react';
import classes from './titleContainer.module.scss';
import dayjs from 'dayjs';
import UppercaseTitle from 'shared/svg/UppercaseTitle.svg?react';
import Sun from 'shared/svg/Sun.svg?react';

const TitleContainer = (): JSX.Element => {
	const today = dayjs().format('dddd, MMMM D, YYYY');

	return (
		<div className={classes.title}>
			<div className={classes.title__image}>
				<img src="../../../../../public/freedom-statue.png" alt="статуя свободы"/>
				Boston and New York Bear Brunt
			</div>
			<a href="">
				<UppercaseTitle/>
			</a>
			<time className={classes.title__date} dateTime={dayjs().toISOString()}>
				{today}
			</time>
			<div className={classes.title__weather}>
				<Sun/>
				- 23 °C
			</div>

		</div>
	);
};

export default TitleContainer;