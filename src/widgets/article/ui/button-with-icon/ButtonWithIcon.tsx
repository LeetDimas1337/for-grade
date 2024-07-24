import React, { ReactNode } from 'react';
import classes from './buttonWithIcon.module.scss'
type ButtonWithIconProps = {
	leftIcon?: ReactNode
	rightIcon?: ReactNode
	text?: ReactNode
}
const ButtonWithIcon = ({ leftIcon, rightIcon, text }: ButtonWithIconProps): JSX.Element => {
	return (
		<button className={classes.button}>
			{leftIcon}
			{text}
			{rightIcon}
		</button>
	);
};

export default ButtonWithIcon;