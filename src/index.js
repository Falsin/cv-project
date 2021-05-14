import React from 'react';

import ReactDOM from 'react-dom';
import App from './App';
import style from './style.css'
import CommonParentComponent from './CommonParentComponent'



ReactDOM.render(
  <React.StrictMode>
    <App />
    <CommonParentComponent />
  </React.StrictMode>,
  document.getElementById('root')
);