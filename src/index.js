import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './config/globalStyle';
import App from './pages';
import reportWebVitals from './reportWebVitals';
import store from './redux'
import {Provider} from 'react-redux';
import {ReactReduxFirebaseProvider} from 'react-redux-firebase';
import firebase, {config} from './config/firebase';
import {createFirestoreInstance} from "redux-firestore";

const rrfProps={
  firebase,
  config: {
    ...config,
    userProfile: "users",
    useFirestoreForProfile: true,
    attachAuthIsReady: true,
  },
  initializeAuth:true,
  dispatch: store.dispatch,
  createFirestoreInstance,
  presence: 'presence', // where list of online users is stored in database
  sessions: 'sessions',
};

ReactDOM.render(
  <React.StrictMode> 
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <GlobalStyle/>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
