import React, { DetailedHTMLProps, HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import classes from './button.module.scss';

type ButtonProps = {
	leftIcon?: ReactNode
	rightIcon?: ReactNode
	count?: ReactNode
	as?: 'a' | 'button'
	href?: string
} & PropsWithChildren & DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
const Button = ({ leftIcon, rightIcon, children, count, as = 'button', href, ...props }: ButtonProps): JSX.Element => {

	const AsComponent = as;

	return (
		<AsComponent href={as === 'a' ? href : undefined} {...props} className={classes.button}>
			{leftIcon}
			<div className={classes.button__text}>
				{children}
				{Boolean(count) &&
                    <span className={classes.button__count}>
					{count}
				</span>
				}
			</div>
			{rightIcon}
		</AsComponent>
	);
};

export default Button;