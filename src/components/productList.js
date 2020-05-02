import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {useSelector, useDispatch} from 'react-redux';
import {addToCart} from '../store/actionType';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const ProductList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [temp] = [useSelector(state => {
    if(state.getProduct.productList.length > 0 && state.searchKeyword.keyword ==='')
    {
      const temp1 = [];
      state.getProduct.productList.forEach(element => {
          temp1.push({...element});
      });
      return [...temp1];
    } else if(state.getProduct.productList.length > 0 && state.searchKeyword.keyword !=='')
    {
      const temp1 = [];
      state.getProduct.productList.forEach(element => {
          const tempName = element.name.toLowerCase();
          const sKey = state.searchKeyword.keyword.toLowerCase();
          console.log(tempName);
          console.log(sKey);
          const res = tempName.indexOf(sKey);
          console.log(res);
          if(res !== -1)
            temp1.push({...element});
      });
      return [...temp1];
    }   
})];

const addToCarthandler = (PName) => {
  const item = temp.find(el => el.name === PName)
  dispatch(addToCart(item));
}

  return (
    <Grid container spacing={3}>
    {
        temp ? temp.map(el => {
            return(<Grid key={el.name} item xs={6} sm={4} md={3}>
                <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={el.name}
                    height="260"
                    image={el.image}
                    title={el.name}
                  />
                  <CardContent>
                    <h4>{el.name}</h4>
                    <span style={{fontWeight:'bold'}}>₹ {el.price.actual}</span>
                    <span style={{fontWeight:'bold',marginLeft:'10px', textDecoration:'line-through'}}>₹ {el.price.display}</span>
                    <span style={{fontWeight:'bold',marginLeft:'30px', color:'#04DA52'}}>{el.discount}% off</span>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="large" style={{backgroundColor:'#FCBA07', color:'#000', borderRadius:'20px', fontWeight:'bold', fontStyle:'none', margin:'auto'}}
                    onClick={()=> addToCarthandler(el.name)}
                  >
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
                </Grid>)
        }) : <Grid item xs={12} style={{textAlign:'center', marginTop:'100px'}}><CircularProgress color="secondary"/></Grid>
    }
    </Grid>
  );
};

export default ProductList;

/**
 * 
 * 
 * {
        allProductList.length > 0 && allProductList.map(el => {
            return(<Grid key={el.name} item xs={6} sm={4} md={3}>
                <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={el.name}
                    height="260"
                    image={el.image}
                    title={el.name}
                  />
                  <CardContent>
                    <h4>{el.name}</h4>
                    <span style={{fontWeight:'bold'}}>₹ {el.price.display}</span>
                    <span style={{fontWeight:'bold',marginLeft:'10px', textDecoration:'line-through'}}>₹ {el.price.actual}</span>
                    <span style={{fontWeight:'bold',marginLeft:'30px', color:'#04DA52'}}>{el.discount}% off</span>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="large" style={{backgroundColor:'#FCBA07', color:'#000', borderRadius:'20px', fontWeight:'bold', fontStyle:'none', margin:'auto'}}>
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
                </Grid>)
        })
    }
 */