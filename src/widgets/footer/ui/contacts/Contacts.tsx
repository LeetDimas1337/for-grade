import React from 'react';
import Symbol from 'shared/svg/Symbol.svg?react';
import Facebook from 'shared/svg/Facebook.svg?react';
import Twitter from 'shared/svg/Twitter.svg?react';
import Instagram from 'shared/svg/Instagram.svg?react';
import YouTube from 'shared/svg/YouTube.svg?react';
import classes from './contacts.module.scss';
import RoundLink from 'shared/ui/round-link/RoundLink.tsx';


const contactUsLinks = [
	'Contact Us',
	'Work with Us',
	'Advertise',
	'Your Ad Choise',
];


const socials = [
	{
		icon: <Facebook style={{ color: 'white' }}/>,
		style: { backgroundColor: '#4267B2' }
	},
	{
		icon: <Twitter style={{ color: 'white' }}/>,
		style: { backgroundColor: '#1DA1F2' }
	},
	{
		icon: <YouTube style={{ color: 'white' }}/>,
		style: { backgroundColor: '#FF0000' }
	},
	{
		icon: <Instagram style={{ color: 'white' }}/>,
		style: { backgroundColor: '#262626' }
	},

];
const Contacts = (): JSX.Element => {
	return (
		<address className={classes.container}>
			<div className={classes.contactUsLinks}>
				<Symbol/>
				{contactUsLinks.map((link) =>
					<a href="">
						{link}
					</a>
				)}
			</div>
			<div className={classes.socials}>
				{socials.map(({icon, style}) =>
					<RoundLink
						icon={icon}
						style={style}
					/>
				)}
			</div>
		</address>
	);
};

export default Contacts;