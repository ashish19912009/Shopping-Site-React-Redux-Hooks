import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import StorefrontIcon from '@material-ui/icons/Storefront';
import {Link} from 'react-router-dom';
import SearchInput from './Search';

const useStyles = makeStyles((theme) => ({
  
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  }
}));

const SearchAppBar = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <StorefrontIcon />
          </IconButton>
          
          <Typography className={classes.title} variant="h6" noWrap>
          <Link to='/' style={{textDecoration:'none', color:'#FFF'}}>Online Shopping</Link>
        </Typography>
          <SearchInput/>
          {
              props.children
          }
        </Toolbar>
       
      </AppBar>
    </div>
  );
}

export default SearchAppBar;
