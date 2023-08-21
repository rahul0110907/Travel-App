import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebaseConfig from './firebase.config';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import {store,persistor} from './store/Store'

console.log(firebaseConfig.messagingSenderId)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={'Loading'} persistor={persistor}>
    <App />
    </PersistGate>
  
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

