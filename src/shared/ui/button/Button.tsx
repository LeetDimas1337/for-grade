import React, { DetailedHTMLProps, HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import classes from './button.module.scss';

type ButtonProps = {
	icon?: ReactNode
	count?: ReactNode
	as?: 'a' | 'button'
	href?: string
} & PropsWithChildren & DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
const Button = ({ icon, children, count, as = 'button', href, ...props }: ButtonProps): JSX.Element => {

	const AsComponent = as;

	return (
		<AsComponent href={as === 'a' ? href : undefined} {...props} className={classes.button}>
			{icon}
			<div className={classes.button__text}>
				{children}
				<span className={classes.button__count}>
				{count}
				</span>
			</div>
		</AsComponent>
	);
};

export default Button;