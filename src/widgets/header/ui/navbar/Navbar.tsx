import React from 'react';
import classes from './navbar.module.scss';

const links = [
	'news',
	'opinion',
	'Science',
	'Life',
	'Travel',
	'Moneys',
	'Art & Design',
	'Sports',
	'People',
	'Health',
	'Education',
];

const Navbar = (): JSX.Element => {
	return (
		<nav className={classes.navbar}>
			<div className={classes.navbar__links}>
				{links.map(link =>
					<a key={link} href="" className={classes.navbar__link}>{link}</a>
				)}
			</div>
		</nav>
	);
};

export default Navbar;