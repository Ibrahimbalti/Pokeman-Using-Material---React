import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import {createBrowserHistory} from 'history'

const history=createBrowserHistory()
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter  history={history}>
    <App />
    </BrowserRouter >
   
  </React.StrictMode>,
  document.getElementById('root')
);


