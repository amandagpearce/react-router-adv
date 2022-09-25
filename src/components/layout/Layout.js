import React, { Fragment } from 'react';
import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';

const Layout = (props) => { // Layout is a wrapper component
    return (
        <Fragment>
            <MainNavigation />
            <main className={classes.main}>{props.children}</main> {/* main will wrap anithing Layout tag gets in between */}
        </Fragment>
    );
};

export default Layout;