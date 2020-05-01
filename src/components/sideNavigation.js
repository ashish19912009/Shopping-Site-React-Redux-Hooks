import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import PriceSlider from './priceSlider';
import Button from '@material-ui/core/Button';
import {useDispatch} from 'react-redux';
import {PriceFilter} from '../store/actionType';

const drawerWidth = 270;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  }
}));

export default function ClippedDrawer() {
  const classes = useStyles();
  const [priceRange, setPriceRange] = useState([]);

  const dispatch = useDispatch();

  const setPriceRangeHandler = (val) => {
    setPriceRange([...val]);
  }

  const setPriceRangeFilter = () => {
    dispatch(PriceFilter(priceRange)); 
  }

  return (
    <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem><h3>Filters</h3></ListItem>
            <ListItem><PriceSlider priceRange={setPriceRangeHandler}/></ListItem>
            <ListItem><Button size="large" color="primary" style={{borderRadius:'20px', fontWeight:'bold', margin:'auto', backgroundColor:'#0997EE', color:'#FFF'}}
            onClick={setPriceRangeFilter}
            >Apply</Button>
            </ListItem>
          </List>
        </div>
      </Drawer>
  );
}
