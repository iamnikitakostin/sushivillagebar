import React from 'react';
import './AboutUs.css'; 
import aboutImage from '../../assets/bg.jpg';

function AboutUs() {
  return (
    <div className="container py-5" id='about'>
      <div className="row d-flex align-items-center">
        <div className="col-lg-6 vh-100 d-flex justify-content-center align-items-center">
          <div>
            <h1 className="display-4">About Us</h1>
            <p className="lead">
              Discover Village Sushi, a cozy hole-in-the-wall run by a delightful Japanese couple.
              With just 8 seats inside and takeout available, it's perfect for a quick lunch.
              Enjoy attentive service as they bring your order to one of the outdoor tables.
            </p>
            <p>
              Indulge in their Chirashi Don, a seafood delight with a light rice base,
              or try their deluxe Futomaki roll. They cater to health-conscious diners
              with brown rice options and offer simple, flavorful sushi rolls like the
              Ebi Salad Roll and Negitoro Roll at a great price.
            </p>
            <p>
              Whether you're a sushi lover or looking for authentic Japanese fare,
              Village Sushi is a must-visit spot.
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <img src={aboutImage} alt="About Village Sushi" className="img-fluid rounded-circle shadow" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;