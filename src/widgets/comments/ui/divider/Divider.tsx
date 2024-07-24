import React from 'react';
import classes from './divider.module.scss'
const Divider = (): JSX.Element => {
    return (
        <hr className={classes.divider}/>
    );
};

export default Divider;