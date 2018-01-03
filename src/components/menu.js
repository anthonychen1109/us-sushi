import React from 'react';

//COMPONENTS
import Header from './header';
import Footer from './footer';

const Menu = () => {
  return (
    <div>
      <Header />
      <h1 className="menu-header">Menu</h1>
      <img className="menu" src={require('../assets/images/Menu-1.jpg')} alt="menu-1"/>
      <img className="menu" src={require('../assets/images/Menu-2.jpg')} alt="menu-2"/>
      <Footer />
    </div>
  )
}

export default Menu;
