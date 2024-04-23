import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Gallery.css'; // Create a CSS file for styling
import image1 from '../../assets/img-products/sushi1.jpeg'
import image2 from '../../assets/img-products/sushi2.webp'

function Gallery() {
  return (
    <div className="container-fluid gallery vh-100" id='gallery'>
      <div className="row">
        <div className="col-md-10 col-sm-12 offset-md-1 d-flex align-items-center">
          <div className="gallery__carousel">
          <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop className="shadow-lg">
              <div>
                <img src={image1} alt="Image 1" />
              </div>
              <div>
                <img src={image2} alt="Image 2" />
              </div>
              {/* Add more images as needed */}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
