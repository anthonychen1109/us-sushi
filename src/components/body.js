import React from 'react';

//COMPONENTS
import Card from './card';

const Body = () => {
  return (
    <div className="body">
      <Card cardImg={require('../assets/images/IMG_6589.PNG')} alt="pic1"/>
      <Card cardImg={require('../assets/images/IMG_6590.PNG')} alt="pic2"/>
      <Card cardImg={require('../assets/images/IMG_6591.PNG')} alt="pic3"/>
    </div>
  )
}

export default Body;
