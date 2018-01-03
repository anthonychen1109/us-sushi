import React from 'react';

//COMPONENTS
import Card from './card';

const Body = () => {
  return (
    <div id="about">
      <div className="about-us">
        <h1>About Us</h1>
      </div>
      <div className="body">
        <Card
          title="A Unique Dining Experience"
          desc="Enjoy Fusion Japanese Cuisine like you never had before!  Don't let the name fool you - our menu includes a lot more than just outstanding sushi.  Try one of our many fusion entrees or one of our delicious hibachi meals!
          This food is so amazing, you will have to come back and bring all your friends!  Enjoy a wide variety of sushi, including many of our own special creations.  Our ingredients are the freshest you can find and that freshness means quality you can taste."
          cardImg={require('../assets/images/IMG_6589.PNG')} alt="pic1"
        />
        <Card
          title="A Taste Delight"
          desc="You will be impressed no matter what food experience you choose.  We have a taste adventure for every appetite.  Impress business associates by taking them to a restaurant with enough variety for everyone while still offering an interesting taste adventure instead of the usual boring cuisine.
          We have a peaceful atmosphere in our restaurant that is perfect for a family dinner or a quiet night out.  We are open for both lunch and dinner so come and join us for either meal, we would love to see you!"
          cardImg={require('../assets/images/IMG_6590.PNG')} alt="pic2"
          />
        <Card
          title="The Story of Sushi & Sake"
          desc="The practice of making sushi began well over a thousand years ago and has evolved into a culinary art form.  Today, it is hard to precisely define sushi because there are so many different types.  Many people believe the stereotype that sushi is simply raw fish but there are many varieties of sushi that are actually cooked.  The sushi rice is prepared with sushi vinegar and then various ingredients are added in creative ways to tempt both your eyes and your taste buds. Sake
          Sake is an alcoholic beverage, similar to wine or beer but with a distinct taste all its own.  It is made from fermented rice and can be served hot or cold.  It will compliment many of our flavorful fusion dishes."
          cardImg={require('../assets/images/IMG_6591.PNG')} alt="pic3"
          />
      </div>
    </div>
  )
}

export default Body;
