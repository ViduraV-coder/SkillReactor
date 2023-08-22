// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';

export const ReactStrictMode = <React.StrictMode>
  <App/>
</React.StrictMode>

export const rootElement = document.getElementById('root')

ReactDOM.render(
  ReactStrictMode,
  rootElement
);

const logout_button = document.getElementById("logout_link");

logout_button.onclick = function logout(){
  const rootElement = document.getElementById("root");
  logout_button.style.display = "none";
  ReactDOM.render(
    ReactStrictMode,
    rootElement
  );
}