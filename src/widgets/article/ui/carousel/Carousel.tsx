import React from 'react';
import classes from './carousel.module.scss';
import ArrowRounded from 'shared/svg/ArrowRounded.svg?react';
import cn from 'classnames';

const Carousel = (): JSX.Element => {
	return (
		<div className={classes.container}>
			<div className={classes.carousel}>
				<button className={cn(classes.arrowButton_left, classes.arrowButton)}>
					<ArrowRounded/>
				</button>
				<button className={cn(classes.arrowButton_right, classes.arrowButton)}>
					<ArrowRounded/>
				</button>
				<figure className={classes.pictureContainer}>
					<img src="public/forest.jpg" alt="Картинка с лесом" className={classes.picture}/>
					<figcaption className={classes.caption}>
						<div className={classes.caption__text}>
									Geostatistics deal with quantitative data analysis, specifically the application of
							statistical methodology
						</div>
						<div className={classes.caption__userInfo}>
							<img src="public/avatar2.png" alt="Челикс" className={classes.caption__avatar}/>
							<div className={classes.caption__userText}>
								<span className={classes.caption__userText_primary}>Andrew Washington</span>
								<span className={classes.caption__userText_secondary}>Photographer</span>
							</div>
						</div>
					</figcaption>
				</figure>
			</div>
		</div>
	);
};

export default Carousel;