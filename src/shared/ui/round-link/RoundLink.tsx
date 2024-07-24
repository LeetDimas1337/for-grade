import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import classes from './roundLink.module.scss';

type RoundButtonProps = {
	icon?: ReactNode
} & DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
const RoundLink = ({ icon, ...props }: RoundButtonProps): JSX.Element => {
	return (
		<a href="" className={classes.link} {...props}>
			{icon}
		</a>
	);
};

export default RoundLink;