import React from 'react';
import './ContactUs.css';

function ContactUs() {
  return (
    <div className="contact-us w-100 vh-100 d-flex justify-content-center align-items-center" id='contact'>
      <div className="container row">
        <div className="col-md-6 col-sm-12">
          <div className="contact-info">
            <h2>Find Us</h2>
            <div className="mb-3">
              <h4>Address:</h4>
              <p>13020 No 2 Rd #150, Richmond, BC V7E 2G1</p>
            </div>
            <div className="mb-3">
              <h4>Phone Number:</h4>
              <p>(604) 271-1067</p>
            </div>
            <p className="small">Developed by <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Nikita Kostin</a></p>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="google-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10445.276905199842!2d-123.17767212114461!3d49.118572144415936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485e1cc1c66a55b%3A0xe696f784a652d5d0!2sVillage%20Sushi%20Bar!5e0!3m2!1sen!2sca!4v1713643764154!5m2!1sen!2sca" width="100%" height="100%" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
