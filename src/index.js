import React from 'react';
import ReactDOM from 'react-dom';
import Header from './headerComponent/Header';
import Footer from './footerComponent/Footer';
import CommonParentComponent from './commonComponents/CommonParentComponent';

import style from './style.css';

ReactDOM.render(
  <>
    <Header />
    <CommonParentComponent />
    <Footer />
  </>,
  document.getElementById('root')
);