import types from './types';
import config from '../../config/site.json';
import errors from './errors.json'
import inspector from 'schema-inspector'
import {user} from '../../config/schemas' 

export const login=({email,password}) => {
  return (dispatch,getState,{getFirebase}) => {
    const firebase=getFirebase();
    firebase.auth().signInWithEmailAndPassword(email,password)
      .then(() => {dispatch({type: types.LOGIN_SUCCESS});})
      .catch((err) => {dispatch({type: types.LOGIN_ERROR,err});setTimeout(() => {
        dispatch({type:types.ACCOUNT_ERROR_RESET});
      }, 10*1000);});
  };
};

export const logout=() => {
  return (dispatch,getState,{getFirebase}) => {
    const firebase=getFirebase();
    firebase.auth().signOut()
    .then(() => {dispatch({type: types.LOGOUT_SUCCESS});});
  };
};

export const register=({email,password,phone,...info},callbacks) => {
  return (dispatch,getState,{getFirebase}) => {
    const firebase=getFirebase();
    const firestore=firebase.firestore();

    // Error Checking
    if(!phone){
      return dispatch({type:types.REGISTER_ERROR,err:errors.REGISTER.NO_PHONE})
    }

    // Create New User
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then((result) => {

      // Create New Firebase Doc, For User Data
      const uid = result.user.uid;

      const newUser = {
        email,
        id:uid, 
        ...info,
        createdOn:Date.now(),
        orders:0,
        phone,
        type:config.userTypes[0]
      }

      const sanitizedUser = inspector.sanitize(user, newUser).data;

      firestore.collection('users').doc(uid).set(sanitizedUser)
    })
    .then(() => {dispatch({type: types.REGISTER_SUCCESS});}) 
    
    // Catching Firebase Errors
    .catch((err) => {
      dispatch({type: types.REGISTER_ERROR,err});
      setTimeout(() => dispatch({type:types.ACCOUNT_ERROR_RESET}), 10*1000);
    })

    // Running All Callbacks
    .then(value=>{for (let i = 0; i < callbacks.length; i++){callbacks[i](value)}}) 
  };
};

export const update=(id,info,...callbacks) => {
  return (dispatch,getState,{getFirebase}) => {
    const firebase=getFirebase();
    const firestore=firebase.firestore();
    firestore.collection('users').doc(id).update(info) 
    .then(() => {dispatch({type: types.UPDATE_SUCCESS});})
    .then(()=>{
      for (let i = 0; i < callbacks.length; i++) {callbacks[i]()}
    })
    .catch((err) => {dispatch({type: types.UPDATE_ERROR,err});setTimeout(() => {
      dispatch({type:types.ACCOUNT_ERROR_RESET});
    }, 10*1000);});
  };
}; 