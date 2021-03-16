import {combineReducers,createStore,applyMiddleware,compose} from 'redux';
import {reduxFirestore,firestoreReducer} from "redux-firestore";
import {getFirebase,firebaseReducer} from "react-redux-firebase";
import thunk from 'redux-thunk';

import {config} from '../config/firebase';

import auth from './auth'

export const rootReducer=combineReducers({
  firebase:firebaseReducer,
  firestore:firestoreReducer,
  auth:auth.reducer,
});

const store=createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase})),
    reduxFirestore(config)
  )
);

export default store;