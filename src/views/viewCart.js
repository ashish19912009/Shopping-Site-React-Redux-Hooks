import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

import Header from '../components/Header';
import Cart from '../components/cart';
import CartBody from '../components/cartBody';

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
            <CartBody/>
        </div>
        </React.Fragment>
        );
};

export default Home;