import React from 'react';
import Button from 'shared/ui/button/Button.tsx';
import classes from './header.module.scss';
import Pencil from 'shared/svg/Pencil.svg?react';

const Header = (): JSX.Element => {
	return (
		<div className={classes.header}>
			<div className={classes.headingContainer}>
				<h2>Comments</h2>
				<span>19</span>
			</div>

			<Button
				style={{
					height: 'fit-content',
					border: '1px solid #D9DADB',
					boxSizing: 'border-box',
			}}
				leftIcon={<Pencil/>}
			>
					<div style={{ color: '#262D33' }}>
						Add comment
					</div>
			</Button>
		</div>
	);
};

export default Header;