import React from 'react';
import ReactDOM from 'react-dom';
import Header from './headerComponent/Header';
import Footer from './footerComponent/Footer';
import CommonParentComponent from './commonComponents/CommonParentComponent';

import style from './style.css';

/* const Components = (
  <div>
    <Header />
    <CommonParentComponent />
    <Footer />
  </div>
); */

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
{/*         <CommonParentComponent />
        <Footer /> */}
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);