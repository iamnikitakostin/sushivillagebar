import React from 'react';
import bg from "../../assets/bg.jpg";
import { TypeAnimation } from 'react-type-animation';
import './Landing.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from "../../assets/carousel/1.jpg";
import image2 from "../../assets/carousel/2.jpg";
import image3 from "../../assets/carousel/3.jpg";


function Landing() {
  return (
    <div className="d-flex align-items-center landing-bg z-1" style={{height: "80vh"}}>
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
      <Carousel className="app__gallery-carousel" infiniteLoop={true} preventMovementUntilSwipeScrollTolerance={true} dynamicHeight={false} showThumbs={false} showStatus={false} autoPlay={true} showArrows={false} showIndicators={false} interval={5000}>
        <div className="gallery__item">
          <img src={image1} alt="restaraunt" />
        </div>
        <div className="gallery__item">
          <img src={image2} alt="restaraunt" />
        </div>
        <div className="gallery__item">
          <img src={image3} alt="restaraunt" />
        </div>

      </Carousel>
    </div>
  );
}

export default Landing;