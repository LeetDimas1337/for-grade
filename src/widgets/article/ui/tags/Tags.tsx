import React from 'react';
import classes from './tags.module.scss';

const tags = [
	'Travel',
	'Destinations',
	'Nature',
	'World',
	'Alaska',
];

const Tags = (): JSX.Element => {
	return (
		<div className={classes.tags}>
			{tags.map((tag) =>
				<div key={tag} className={classes.tag}>
					{tag}
				</div>
			)}
		</div>
	);
};

export default Tags;