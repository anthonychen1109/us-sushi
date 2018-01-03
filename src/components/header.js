import React from 'react';

//COMPONENTS
import NavBar from './navbar';

const Header = () => {
  return (
    <div>
      <NavBar />
      
      <div className="header">

        <div className='header-logo'>
          <img src={require('../assets/images/logo.png')} alt="us-sushi logo" />
        </div>

        <div className="header-name">
          <h1>US Sushi</h1>
        </div>

        <div className="social-media">
          <img src={require('../assets/images/twitter-logo.png')} alt="twitter-logo" />
          <img  src={require('../assets/images/fb-logo.png')} alt="fb-logo" />
        </div>

      </div>
  </div>
  )
}

export default Header;
