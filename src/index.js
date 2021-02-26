import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './config/globalStyle';
import FontFace from './config/fontFace';
import App from './pages';
import reportWebVitals from './reportWebVitals';

// When You Have Firebase Integrated
/*ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);*/

ReactDOM.render(
  <React.StrictMode>
    <FontFace/>
    <GlobalStyle/>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
