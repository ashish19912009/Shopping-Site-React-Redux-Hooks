import * as ActionTypes from './actionType';

const initialData = {
    cart:[]
}

const cartReducer = (state = initialData, action) => {
    console.log(action);
    switch(action.type)
        {
        case(ActionTypes.ADD_CART) :
                                        const tempCart = [];
                                        state.cart.forEach(element =>{
                                            const temp1 = {
                                                name:'',
                                                image:'',
                                                quantity:0,
                                                price:{
                                                    actual:0,
                                                    display:0
                                                },
                                                discount:0
                                            };
                                                temp1.name = element.name;
                                                temp1.image = element.image;
                                                temp1.price = {...element.price};
                                                temp1.discount = element.discount;
                                                temp1.quantity = element.quantity;
                                                tempCart.push(temp1);
                                        });
                                        if(tempCart.findIndex((el)=>{
                                            return el.name === action.productDetails.name  
                                      }) === -1)
                                      {
                                        const tempNewProduct = {
                                            name:'',
                                            image:'',
                                            quantity:0,
                                            price:{
                                                actual:0,
                                                display:0
                                            },
                                            discount:0
                                        };
                                        tempNewProduct.name = action.productDetails.name;
                                        tempNewProduct.image = action.productDetails.image;
                                        tempNewProduct.price = {...action.productDetails.price};
                                        tempNewProduct.quantity++;
                                        tempNewProduct.discount = action.productDetails.discount;
                                        tempCart.push(tempNewProduct);
                                      } else {
                                        tempCart.forEach(el => {
                                            if(el.name === action.productDetails.name)
                                                el.quantity++;
                                        });
                                      }
                                        return {
                                            cart:tempCart
                                        };
        case(ActionTypes.REMOVE_ITEM) :
                                        const tempRemoveCart = [];
                                        let filtered = [];
                                        state.cart.forEach(element =>{
                                            const temp1 = {
                                                name:'',
                                                image:'',
                                                quantity:0,
                                                price:{
                                                    actual:0,
                                                    display:0
                                                },
                                                discount:0
                                            };
                                                temp1.name = element.name;
                                                temp1.image = element.image;
                                                temp1.price = {...element.price};
                                                temp1.quantity = element.quantity;
                                                temp1.discount = element.discount;
                                                tempRemoveCart.push(temp1);
                                                filtered = tempRemoveCart.filter((el,i)=> i !== action.id)
                                        });
                                        return {
                                            cart:filtered
                                        };
        case(ActionTypes.INCREMENT_QUANTITY) :
                                        const tempAddQunatity = [];
                                        state.cart.forEach(element =>{
                                            const temp1 = {
                                                name:'',
                                                image:'',
                                                quantity:0,
                                                price:{
                                                    actual:0,
                                                    display:0
                                                },
                                                discount:0
                                            };
                                                temp1.name = element.name;
                                                temp1.image = element.image;
                                                temp1.price = {...element.price};
                                                temp1.quantity = element.quantity;
                                                temp1.discount = element.discount;
                                                tempAddQunatity.push(temp1);
                                        });
                                        const temp10 = tempAddQunatity.map((el,i) => {
                                            if(i === action.iPosition)
                                                {
                                                    el.quantity++;
                                                    return el;
                                                }
                                            return el;
                                        });
                                        return {
                                            cart:temp10
                                        }; 
        case(ActionTypes.DECREMENT_QUANTITY) :
                                        const tempSubQunatity = [];
                                        state.cart.forEach(element =>{
                                            const temp1 = {
                                                name:'',
                                                image:'',
                                                quantity:0,
                                                price:{
                                                    actual:0,
                                                    display:0
                                                },
                                                discount:0
                                            };
                                                temp1.name = element.name;
                                                temp1.image = element.image;
                                                temp1.price = {...element.price};
                                                temp1.quantity = element.quantity;
                                                temp1.discount = element.discount;
                                                tempSubQunatity.push(temp1);
                                        });
                                        const temp11 = tempSubQunatity.map((el,i) => {
                                            if(i === action.iPosition && el.quantity >= 2)
                                                {
                                                    el.quantity--;
                                                    return el;
                                                }
                                            return el;
                                        });
                                        return {
                                            cart:temp11
                                        };
        default: return state;
        }
};

export default cartReducer;