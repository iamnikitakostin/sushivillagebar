import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Gallery.css'; // Create a CSS file for styling
import image1 from '../../assets/food/1.jpg'
import image2 from '../../assets/food/2.jpg'
import image3 from '../../assets/food/3.jpg'
import image4 from '../../assets/food/4.jpg'
import image5 from '../../assets/food/5.jpg'
import image6 from '../../assets/food/6.jpg'


function Gallery() {
  return (
    <div className="container-fluid gallery vh-100" id='gallery'>
      <div className="row">
        <div className="col-md-10 col-sm-12 offset-md-1 d-flex align-items-center">
          <div className="gallery__carousel">
          <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop className="shadow-lg">
              <div className='gallery-item'>
                <img src={image1} alt="food" />
              </div>
              <div className='gallery-item'>
                <img src={image2} alt="food" />
              </div>
              <div className='gallery-item'>
                <img src={image3} alt="food" />
              </div>
              <div className='gallery-item'>
                <img src={image4} alt="food" />
              </div>
              <div className='gallery-item'>
                <img src={image5} alt="food" />
              </div>
              <div className='gallery-item'>
                <img src={image6} alt="food" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
