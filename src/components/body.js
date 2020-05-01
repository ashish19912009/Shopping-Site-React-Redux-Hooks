import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import SmallMenu from '../components/mobileView';
import Hidden from '@material-ui/core/Hidden';
import ProductList from './productList';
import {useDispatch} from 'react-redux';
import {sortByType} from '../store/actionType';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: '10px'
  },
}));

const Body = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const setSortType = (type) => {
    dispatch(sortByType(type));
  }
  return (
    <React.Fragment>
    <main className={classes.content}>
    <Hidden smUp>
        <SmallMenu/>
    </Hidden>
    <Toolbar />
    <Hidden xsDown>
    <Link underline='none'>
  <span style={{fontSize:'18px', fontWeight:'bold', color:'#000'}}>Sort By :</span>
  </Link> <Link
    component="button"
    variant="body2"
    underline="hover"
    onClick={() => setSortType('LTH')}
  >
  <span style={{fontSize:'18px', fontWeight:'bold', marginLeft:'15px'}}>Price -- High Low</span>
  </Link>
  <Link
    component="button"
    variant="body2"
    underline="hover"
    onClick={() => setSortType('HTL')}
  >
  <span style={{fontSize:'18px', fontWeight:'bold', marginLeft:'15px'}}>Price -- Low High</span>
  </Link>
  <Link
    component="button"
    variant="body2"
    underline="hover"
    onClick={() => setSortType('Discount')}
  >
  <span style={{fontSize:'18px', fontWeight:'bold', marginLeft:'15px'}}>Discount</span>
  </Link>
    </Hidden>
    <div style={{marginTop:'20px'}}>
        <ProductList/>
    </div>
  </main>
    </React.Fragment>
  );
};

export default Body;
