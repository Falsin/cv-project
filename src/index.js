import React from 'react';
import ReactDOM from 'react-dom';
import Header from './headerComponent/Header'
import style from './style.css'
import CommonParentComponent from './commonComponents/CommonParentComponent'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <CommonParentComponent />
  </React.StrictMode>,
  document.getElementById('root')
);