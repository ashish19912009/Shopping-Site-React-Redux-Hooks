import ProductList from '../jsonData/jsonProduct';

export const GET_ALL_PRODUCT = 'GET_ALL_PRODUCT';
export const ADD_CART = 'ADD_CART';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';
export const LowToHigh = 'LTH';
export const HighToLow = 'HTL';
export const Discount = 'Discount';
export const filter = 'Filter';

export const setAllProduct = (res) => {
    return{
        type: GET_ALL_PRODUCT,
        result: res
    }
}

export const getAllProduct = () => {
    return dispatch => {
        setTimeout(()=> {
            console.log('Middleware Executed - Can make API Call to Server');
            dispatch(setAllProduct(ProductList))
        }, 2000);
    }
}

export const sortByType = (sortType) => {
    return{
        type: sortType
    }    
}

export const PriceFilter = (range) => {
    return{
        type: filter,
        range: range
    }
}

export const addToCart = (p_details) => {
    return {
        type: ADD_CART,
        productDetails: p_details
    }
}

export const removeItemFromCart = (p_id) => {
    return{
        type: REMOVE_ITEM,
        id: p_id
    }
}

export const IncrementQuantity = (iName) => {
    return {
        type: INCREMENT_QUANTITY,
        iPosition: iName
    }
}

export const DecrementQuantity = (iName) => {
    return {
        type: DECREMENT_QUANTITY,
        iPosition: iName
    }
}
