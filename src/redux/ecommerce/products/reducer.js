import types from './types';

const initialState={

}

const reducer=(state=initialState,action)=>{
  switch (action.type) {
    case types.CREATE_PRODUCT_ERROR:{console.error(action.err);return state}
    default:{return state}
  }
}

export default reducer;