import React from 'react';
import classes from './linkMenu.module.scss';

export type LinkMenuProps = {
	links: string[]
	header: string
	color: string
}
const LinkMenu = ({ color, header, links }: LinkMenuProps): JSX.Element => {
	return (
		<div style={{ borderColor: color }} className={classes.linkMenuContainer}>
			<div className={classes.header}>
				{header}
			</div>
			<ul className={classes.list}>
				{links.map((link) =>
					<li key={link}>
						<a href="">{link}</a>
					</li>
				)}

			</ul>
		</div>

	);
};

export default LinkMenu;