import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <img className="card-img-top" src={props.cardImg} alt="Card"/>
      <div className="card-block">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text">{props.desc}</p>
      </div>
    </div>
  )
}

export default Card;
