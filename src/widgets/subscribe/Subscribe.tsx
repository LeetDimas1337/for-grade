import React from 'react';
import Button from 'shared/ui/button/Button.tsx';
import classes from './subscribe.module.scss';

const Subscribe = (): JSX.Element => {
	return (
		<section className={classes.subscribeContainer}>
			<h2>
				Subscribe now and get 20% off
			</h2>
			<form>
				<input type="text" placeholder={'Enter your email'}/>
				<Button
					style={{ backgroundColor: '#4592FF', padding: '10px 28px 10px 29px', height: '40px' }}
				>
					Subscribe
				</Button>
			</form>
		</section>
	);
};

export default Subscribe;