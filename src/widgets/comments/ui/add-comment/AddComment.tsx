import React from 'react';
import Button from 'shared/ui/button/Button.tsx';
import Arrow from 'shared/svg/Arrow.svg?react';
import classes from './addComment.module.scss';

const AddComment = (): JSX.Element => {

	const textAreaId = 'comment';

	return (
		<section className={classes.addCommentContainer}>
			<label htmlFor={textAreaId} className={classes.header}>What do you think?</label>
			<div className={classes.formContainer}>
				<img src="public/avatar5.png" alt="avatar" className={classes.avatar}/>
				<form>
					<div className={classes.textAreaContainer}>
						<div className={classes.triangleLeft}>
							<div className={classes.innerTriangle}/>
						</div>
						<textarea id={textAreaId}/>
					</div>
					<div>
						<Button
							style={{ backgroundColor: '#4592FF' }}
							rightIcon={
								<Arrow style={{ transform: 'rotateZ(180deg)' }}/>
							}
						>
							Submit
						</Button>
					</div>
				</form>
			</div>


		</section>
	);
};

export default AddComment;