import React, {useState} from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


import image2 from '../../assets/images/image2.jpeg';
import image3 from '../../assets/images/image3.jpeg';
import image4 from '../../assets/images/image4.jpeg';
import image5 from '../../assets/images/image5.jpeg';
import image6 from '../../assets/images/image6.jpeg';


function Slideshow() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    // ** want to loop through images for cleaner code **
    // const images = [image1, image2, image3, image4];
  
    return (
      <div id="slideshow">
      
      <Carousel fade activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image2}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image3}
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image4}
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image5}
            alt="Fourth slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image6}
            alt="Fifth slide"
          />
        </Carousel.Item>
      </Carousel>
      </div>
    );
  }
  
  export default Slideshow;