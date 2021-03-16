import types from './types';

const initialState={
  loginError:null,
  registerError:null
}

const reducer=(state=initialState,action)=>{
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        error:null
      };
    case types.LOGIN_ERROR:
      return {
        ...state,
        loginError:action.err
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        error:null
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        error:null
      };
    case types.REGISTER_ERROR:
      return{
        ...state,
        register:action.err
      }
    case types.ACCOUNT_ERROR_RESET:
      return{
        ...state,
        loginError:null,
        registerError:null
      }
    default:
      return state;
  }
}

export default reducer;