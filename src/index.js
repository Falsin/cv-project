import React from 'react';
import ReactDOM from 'react-dom';
import Header from './headerComponent/Header';
import Footer from './footerComponent/Footer';
import CommonParentComponent from './commonComponents/CommonParentComponent';

import style from './style.css';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Header />
      <CommonParentComponent />
      <Footer />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);