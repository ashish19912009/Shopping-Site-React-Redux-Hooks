import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import {useSelector, useDispatch} from 'react-redux';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import {removeItemFromCart, IncrementQuantity, DecrementQuantity} from '../store/actionType';
import ArrowBackIosSharpIcon from '@material-ui/icons/ArrowBackIosSharp';
import {useHistory} from 'react-router-dom';
import Styles from './cartBody.module.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:'20px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const cartCalc = {
    total: 0,
    display: 0,
  }

  const pageHistory = useHistory();

  let cartItem = [];
  [cartItem] = [useSelector(state=> {
    const temp1 = [];
    state.addToCart.cart.forEach(element => {
        temp1.push({...element});
        cartCalc.display += (element.price.display * element.quantity);
        cartCalc.total += (element.price.actual * element.quantity);
    });
    return [...temp1]
  })];

  const removeItemFromCartHandler = (itemName) => {
    dispatch(removeItemFromCart(itemName));
  }

  const AddOneItemHandler = (i) => {
    dispatch(IncrementQuantity(i))
  }

  const RemoveOneItemHandler = (i) => {
    dispatch(DecrementQuantity(i))
  }

  const goBackToHomeHandler = () => {
    pageHistory.goBack();
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1} style={{padding:'70px 30px'}}>
        <Grid container item xs={12} sm={8}>
        <Typography variant="h4" gutterBottom style={{fontWeight:'bold'}}>
        <ArrowBackIosSharpIcon className={Styles.back} onClick={goBackToHomeHandler}/> {cartItem.length > 0 ? 'Cart Items' : 'Go Back'}
      </Typography>
        {
            cartItem.length> 0 ? cartItem.map((el,i)=> {
                return (<Card key={el.name} variant="outlined" style={{width:'90%', marginBottom:'20px'}}>
                    <Grid container spacing={1}>
                    <Grid item xs={4}>
                    <CardMedia
                    style={{margin:'2px', border:'solid thin #333', borderRadius:'5px', maxHeight:'200px'}}
                    image={el.image}
                    component="img"
                    />
                    </Grid>
                    <Grid item xs={6}>
                    <Grid item xs={12}><Typography variant="h6" gutterBottom>
                            {el.name}
                        </Typography></Grid>
                        <Grid item xs={12}>
                        <span style={{fontWeight:'bold'}}>₹ {el.price.actual}</span>
                        <span style={{fontWeight:'bold',marginLeft:'10px', textDecoration:'line-through'}}>₹ {el.price.display}</span>
                        <span style={{fontWeight:'bold',marginLeft:'10px', color:'#04DA52'}}>{el.discount}% off</span>
                        </Grid>
                        <br/>
                        <Grid item xs={12}>
                       <AddCircleOutlineIcon onClick={() => AddOneItemHandler(i)} style={{position:'relative',top:'10px', margin:'0px 5px'}} /><input type='text' id='ttlUnit' readOnly value={el.quantity} style={{width:'70px', height:'40px'}}/><RemoveCircleOutlineIcon style={{position:'relative',top:'10px',margin:'0px 5px'}} onClick={() => RemoveOneItemHandler(i)}/>
                    </Grid>
                    <Grid item xs={12} style={{textAlign:'center'}}><br/><Button variant="contained" onClick={()=> removeItemFromCartHandler(i)} style={{width:'100%'}}>Remove</Button></Grid>
                    </Grid>
                    </Grid>
                    </Card>
                )
            }) : <React.Fragment><img src={require('../img/emptyCart.png')} style={{marginTop:'50px'}}/></React.Fragment>
        }
        </Grid>
        <Grid container item xs={12} sm ={4}>
        <Card variant="outlined" style={{width:'90%', marginBottom:'20px', maxHeight:'300px'}}>
      <CardContent>
        <Typography variant="h5" component="h2" style={{fontWeight:'bold'}}>
          Cart Summary
        </Typography>
        {
            cartItem.length > 0 ? (<React.Fragment><Divider/><br/><br/><Typography color="textSecondary">
            item({cartItem.length}) :   {cartCalc.display}
          </Typography>
          <Typography color="textSecondary">
            Discount :  {100 - (Math.ceil((cartCalc.total/cartCalc.display)*100))}%
          </Typography>
          <Divider/><br/>
          <Typography className={classes.pos} color="textSecondary" style={{fontWeight:'bold'}}>
          
            Total : {cartCalc.total}
          </Typography>
          <br/>
          <Button size="large" style={{width:'100%', color:'#000', backgroundColor:'#F9DF08', fontWeight:'bold'}}>
          Checkout
        </Button>
          </React.Fragment>) : <React.Fragment>
          <br/><Typography className={classes.pos} color="textSecondary">
          EmptyCart
        </Typography>
          </React.Fragment>
        }
      </CardContent>
    </Card>
        </Grid>
      </Grid>
    </div>
  );
}
