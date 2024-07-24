import React from 'react';
import Eye from 'shared/svg/Eye.svg?react';
import Comment from 'shared/svg/Comment.svg?react';
import classes from './materialOnTheme.module.scss';

const MaterialOnTheme = (): JSX.Element => {
	return (
		<aside>
			<article className={classes.container}>
				<h1 className={classes.title}>
					Material on Theme
				</h1>
				<a href="">
					<img src="public/giraffe.png" alt="Жыраф" className={classes.picture}/>
					<h2 className={classes.articleName}>
						Application of Postcolonial Theory in the Middle East
					</h2>
					<p className={classes.shortDescription}>
						In the essays "Overstating the Arab State", by Nazih Ayubi, and "Is Jordan Palestine?", by
						Raphael
						Israel, the authors deal with <br/> the psychologically fragmented postcolonial identity.
					</p>
				</a>
				<div className={classes.footer}>
					<div className={classes.footer__iconWithText}>
						<Eye style={{ color: '#BCBFC2' }}/>
						1,623
					</div>
					<div className={classes.footer__iconWithText}>
						<Comment style={{ color: '#BCBFC2' }}/>
						102
					</div>
				</div>
			</article>
		</aside>
	);
};

export default MaterialOnTheme;
