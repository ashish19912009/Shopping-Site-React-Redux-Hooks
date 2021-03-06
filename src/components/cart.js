import React from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

export default function CustomizedBadges() {

  let count;
  count = useSelector(state => state.addToCart.cart.length);

  return (
    <Link to='/cart'>
    <IconButton aria-label="cart" >
    <StyledBadge badgeContent={count} color='secondary' >
      <img src={require('../img/cart.png')}/>
    </StyledBadge>
  </IconButton>
    </Link>
  );
}
