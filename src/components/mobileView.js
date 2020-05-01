import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import MFilterDialog from './filterDialog';
import MSortDialog from './sortDialog';

const SearchAppBar = () => {

  const [openFilter, setOpenFilter] = useState(false);
  const [openSort, setOpenSort] = useState(false);
  
  const openFilterHandler = () => {
    setOpenFilter(!openFilter);
  }

  const openSortHandler = () => {
    setOpenSort(!openSort);
  }

  return (
    <React.Fragment>
    <AppBar position="fixed" style={{top:'55px', boxShadow:'none'}}>
    <Grid container>
      <Grid item xs={6}>
      <Button variant="contained" disableElevation style={{width:'100%', borderRadius:'0px'}} onClick={openSortHandler}>
        Sort
      </Button>
      </Grid>
      <Grid item xs={6}>
      <Button variant="contained" disableElevation style={{width:'100%', borderRadius:'0px'}} onClick={openFilterHandler}>
      Filter
    </Button>
      </Grid>
    </Grid>
    <MFilterDialog open={openFilter} actionhandler={openFilterHandler} />
    <MSortDialog open={openSort} actionhandler={openSortHandler}/>
  </AppBar>
    </React.Fragment>
  );
}

export default SearchAppBar;
