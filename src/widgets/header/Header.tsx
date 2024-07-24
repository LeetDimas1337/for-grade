import React from 'react';
import classes from './header.module.scss';
import SearchContainer from 'widgets/header/ui/search-container/SearchContainer.tsx';
import TitleContainer from 'widgets/header/ui/title-container/TitleContainer.tsx';
import Navbar from 'widgets/header/ui/navbar/Navbar.tsx';


const Header = (): JSX.Element => {

	return (
		<header className={classes.header}>
			<div>
				<SearchContainer/>
				<TitleContainer/>
			</div>
			<Navbar/>
		</header>
	);
};

export default Header;