import React,{useEffect} from 'react';
import Home from './views/home';
import Cart from './views/viewCart';
import './App.css';
import { HashRouter, Route, Switch } from "react-router-dom";
import {useDispatch} from 'react-redux';
import {getAllProduct} from './store/actionType';

// const logger = store => {
//   return next => {
//     return action => {
//       console.log('[Middleware] - Dispatching ',action);
//       const result = next(action);
//       console.log('[Middleware] - next State', store.getState());
//       return result;
//     }
//   }
// }

const App = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllProduct());
  },[]);

  return (
    
      <HashRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/home' exact component={Home} />
          <Route path='/cart' exact component={Cart} />
        </Switch>
      </HashRouter>
  );
}

export default App;
