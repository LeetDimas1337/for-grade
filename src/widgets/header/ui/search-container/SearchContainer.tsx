import React from 'react';
import classes from './searchContainer.module.scss';
import HamburgerMenu from 'shared/svg/HamburgerMenu.svg?react';
import Search from 'shared/svg/Search.svg?react';
import Man from 'shared/svg/Man.svg?react';

const SearchContainer = (): JSX.Element => {
	return (
		<div className={classes.baseInfo}>
			<div className={classes.searchContainer}>
				<button className={classes.searchContainer__menuButton}>
					<HamburgerMenu/>
					Sections
				</button>
				<search>
					<form className={classes.searchContainer__search}>
						<Search/>
						<input type="search" placeholder={'Search'}/>
					</form>
				</search>
				<button className={classes.searchContainer__subscribe}>
					<img src="public/subscribe.png" alt="Уменьшенное изображение сайта"/>
					<div className={classes.searchContainer__subscribeTextBlock}>
						<div className={classes.searchContainer__subscribeTextBlock_primary}>Subscribe now</div>
						<div className={classes.searchContainer__subscribeTextBlock_secondary}>3 month for $19</div>
					</div>
				</button>
				<div className={classes.searchContainer__signInContainer}>
					<button className={classes.searchContainer__signIn}>
						<Man/>
						Sign in
					</button>
				</div>

			</div>
		</div>

	);
};

export default SearchContainer;