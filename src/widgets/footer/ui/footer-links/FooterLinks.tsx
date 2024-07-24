import React from 'react';
import LinkMenu from 'widgets/footer/ui/link-menu/LinkMenu.tsx';
import classes from './footerLinks.module.scss';
import { linkMenus } from 'widgets/footer/lib/consts';


const FooterLinks = (): JSX.Element => {
	return (
		<nav className={classes.footerLinks}>
			{linkMenus.map((menuProps) =>
				<LinkMenu key={menuProps.header} {...menuProps}/>
			)}
		</nav>
	);
};

export default FooterLinks;
;