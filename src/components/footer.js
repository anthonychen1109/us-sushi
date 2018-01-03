import React from 'react';

import Location from './location';

const Footer = () => {
  return (
    <div className="footer" id="contact">

      <div className="hours">
        <h4>Hours</h4>
        <br />
        <h6>Lunch</h6>
        <h6>Monday - Friday: 11:00AM - 2:30PM</h6>
        <br />
        <h6>Dinner</h6>
        <h6>Monday - Friday: 4:30PM - 10:00PM</h6>
        <h6>Saturday - Sunday: 12:00PM - 10:00PM</h6>

      </div>

      <div className="location">
        <h4>Directions</h4>
        <Location />
      </div>

      <div className="contact">
        <h4>Address</h4>
        <br />
        <h6>2531 Eastchester Dr.,</h6>
        <h6>High Point, NC 27265</h6>
        <br />
        <h4>Telephone:</h4>
        <h6>(336) 841 - 5858</h6>
        <br />
        <img className="qr-code" src={require('../assets/images/qrcode.png')} alt="QR code"/>
      </div>

    </div>
  )
}

export default Footer;
