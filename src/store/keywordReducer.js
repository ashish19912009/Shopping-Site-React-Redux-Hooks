import * as ActionKey from './actionType';

const initialState = {
    keyword:''
}

const searchKeyReducer = (state = initialState, action) => {
    console.log(action);
    switch(action.type)
    {
        case(ActionKey.SearchKeyword):  return{
                                        keyword: action.keyword
                                        }
        default: return state;
    }
};

export default searchKeyReducer;