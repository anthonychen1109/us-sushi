import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <img className="card-img-top" src={props.cardImg} alt="Card image cap"/>
      <div className="card-block">
        <h4 className="card-title">Card title</h4>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  )
}

export default Card;
