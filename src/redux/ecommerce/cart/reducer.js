import types from './types';

const initialState={
  purchases:[],
  totalCost:0,
  totalAmount:0
} 

const reducer=(state=initialState,action)=>{
  switch (action.type) {
    case types.ADD_TO_CART:return {...action.payload}
    case types.REMOVE_FROM_CART:return {...action.payload}
    case types.RESET_CART:return initialState
    default:{return state}
  }
}

export default reducer;