import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import GetProductReducer from './store/getProductReducer';
import addToCartReducer from './store/cartReducer';
import searchReducer from './store/keywordReducer';

const rootReducer = combineReducers({
  getProduct: GetProductReducer,
  addToCart: addToCartReducer,
  searchKeyword: searchReducer
});

const store = createStore(rootReducer, applyMiddleware(/**logger, */thunk));

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
