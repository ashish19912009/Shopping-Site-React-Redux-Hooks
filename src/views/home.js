import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

import Header from '../components/Header';
import Cart from '../components/cart';
import SideDrawer from '../components/sideNavigation';
import Body from '../components/body';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },}));

const Home  = () => {
    const classes = useStyles();
    return(
        <React.Fragment>
        <div className={classes.root}>
        <CssBaseline/>
        <Header>
            <Cart/>
        </Header>
        <div className={classes.container}>
            <Hidden xsDown>
                <SideDrawer/>
            </Hidden>
        </div>
    <Body/>
        </div>
        </React.Fragment>
        );
};

export default Home;