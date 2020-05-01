import * as ActionType from './actionType';

const initialData = {
    productList:[]
}

const productListReducer = (state = initialData, action) => {
    console.log("Product Reducer Action", action);
    console.log("Product State Data", state);
    switch(action.type)
    {
        case(ActionType.GET_ALL_PRODUCT): 
                                            const temp = [];
                                            action.result.items.forEach(el=>{
                                                temp.push(el)
                                            });
                                            return {
                                                productList: temp
                                            }
        case(ActionType.HighToLow): 
                                            const tempHTL = [];
                                            state.productList.forEach(element => {
                                                const temp1 = {
                                                    name:'',
                                                    image:'',
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
                                                tempHTL.push(temp1);
                                            });
                                            tempHTL.sort((a,b)=> a.price.actual - b.price.actual);
                                            return{
                                                productList: tempHTL
                                            }
        case(ActionType.LowToHigh): 
                                            const tempLTH = [];
                                            state.productList.forEach(element => {
                                                const temp1 = {
                                                    name:'',
                                                    image:'',
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
                                                tempLTH.push(temp1);
                                            });
                                            tempLTH.sort((a,b)=>  b.price.actual - a.price.actual);
                                            return{
                                                productList: tempLTH
                                            }
        case(ActionType.Discount): 
                                            const tempDiscount = [];
                                            state.productList.forEach(element => {
                                                const temp1 = {
                                                    name:'',
                                                    image:'',
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
                                                tempDiscount.push(temp1);
                                            });
                                            tempDiscount.sort((a,b)=>  b.discount - a.discount);
                                            return{
                                                productList: tempDiscount
                                            }
        case(ActionType.filter): 
                                            const tempFilter = [];
                                            state.productList.forEach(element => {
                                                const temp1 = {
                                                    name:'',
                                                    image:'',
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
                                                tempFilter.push(temp1);
                                            });
                                            const filteredList = tempFilter.filter((el)=>  el.price.actual > action.range[0] && el.price.actual < action.range[1]);
                                            return{
                                                productList: filteredList
                                            }
        default: return state;
    }
};

export default productListReducer;
