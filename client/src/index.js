import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import store from "./redux/store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import store from "./redux/store";
import { Auth0Provider } from '@auth0/auth0-react'


ReactDOM.render(
  <>
      <Provider store={store}>
          <BrowserRouter>
           <Auth0Provider domain={'dev-u0vglkjk.us.auth0.com'} clientId={'9T5U1XD0PmFwJOjNxR0tSHHb2J83fbQP'} redirectUri={window.location.origin}>
              <App /> 
          </Auth0Provider>
          </BrowserRouter>
      </Provider>
  </>,
  document.getElementById('root')
);

