import React from 'react';
import constructor from '../images/сonstructor.png';

class Header extends React.Component {
  render() {
    return(
      <header>
        <div className='container'>
          <img src={constructor} alt=''></img>
          <h1>CV Сonstructor</h1>
        </div>
      </header>
    )
  }
}

export default Header;
