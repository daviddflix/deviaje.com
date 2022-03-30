import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.render(
  <BrowserRouter>
   <React.StrictMode>
    <Auth0Provider 
      domain = 'dev-h4549xf3.us.auth0.com'
      clientId = 't3oNLNvKxakUop3DlpApg7qq5qnkc2jd'
      redirectUri = { window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
