import React from 'react';
import FooterLinks from 'widgets/footer/ui/footer-links/FooterLinks.tsx';
import classes from './footer.module.scss';
import Contacts from 'widgets/footer/ui/contacts/Contacts.tsx';

const Footer = (): JSX.Element => {
	return (
		<footer className={classes.footer}>
			<div className={classes.container}>
				<FooterLinks/>
				<hr className={classes.divider}/>
				<Contacts/>
				<hr className={classes.divider}/>
				<div className={classes.bottomText}>
					<div>
						Universal’s business concept is to offer fashion and quality at the best price in a sustainable
						way. Universal has since <br/> it was founded in 2015 grown into one of the world's leading fashion
						companies.
					</div>
					<div>
						© 2019 Universal UI Kit
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;