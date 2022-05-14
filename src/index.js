import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import {CookiesProvider} from 'react-cookie';
import {myReducer} from './reducers/index';
let store = createStore(myReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <CookiesProvider>
      <Provider store={store}>
       <BrowserRouter>
           <App />
       </BrowserRouter>
      </Provider>
      </CookiesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
