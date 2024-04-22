import React from 'react';
import bg from "../../assets/bg.jpg";
import { TypeAnimation } from 'react-type-animation';
import './Landing.css';

function Landing() {
  return (
    <div className="vh-100 d-flex align-items-center landing-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto text-center">
            <h1 className="display-4 fw-bold text-white">
              <TypeAnimation
                sequence={[
                  'An authentic flavour of Japan at our cozy sushi hideaway.',
                  3000,
                  'Telling a story of family tradition, and unbeatable value.',
                  3000
                ]}
                speed={150}
                wrapper="div"
                repeat={Infinity}
              />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;