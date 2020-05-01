import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import PriceRangeSlider from './priceSlider';
import {useDispatch} from 'react-redux';
import {PriceFilter} from '../store/actionType';

const AlertDialog = (props) =>  {
  const [priceRange, setPriceRange] = useState([]);
  const dispatch = useDispatch();

  const setPriceRangeHandler = (val) => {
    setPriceRange([...val]);
  }

  const setPriceRangeFilter = () => {
    dispatch(PriceFilter(priceRange)); 
    props.actionhandler();
  }

  return (
      <Dialog
        open={props.open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth='lg'
        fullWidth={true}
      >
        <DialogTitle id="alert-dialog-title">{"Filter Option"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <br/>
            <PriceRangeSlider priceRange={setPriceRangeHandler}/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Grid container >
            <Grid item xs={6}>
            <Button onClick={setPriceRangeFilter} color="primary" style={{width:'100%'}}>
                Apply
            </Button></Grid>
            <Grid item xs={6}>
            <Button onClick={props.actionhandler} color="primary" style={{width:'100%'}}>
                Cancle
          </Button></Grid>
        </Grid>
        </DialogActions>
      </Dialog>
  );
}

export default AlertDialog;


