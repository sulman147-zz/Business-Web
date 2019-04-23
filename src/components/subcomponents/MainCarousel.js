import { Carousel }from 'react-bootstrap';
import React from 'react';

export default class MainCarousel extends React.Component {
render() {
    return (


    <Carousel>
    <Carousel.Item >
        <img className="d-block w-100"
            src="http://aci.com.pk/images/slider/homepage/Slider1.jpg"
            alt="First slide"
        />
        <Carousel.Caption>
           <h3>First slide label</h3>
           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img className="d-block w-100"
            src="http://aci.com.pk/images/slider/homepage/Slider3.jpg"
            alt="Second slide"
        />
        <Carousel.Caption>
           <h3>Second slide label</h3>
           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img className="d-block w-100"
            src="http://aci.com.pk/images/slider/homepage/Slider4.jpg"
            alt="Third slide"
        />
        <Carousel.Caption>
           <h3>Third slide label</h3>
           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img className="d-block w-100"
            src="http://www.akbari.com.pk/assets/img/slider/3.jpg"
            alt="Forth slide"
        />
        <Carousel.Caption>
           <h3>Fifth slide label</h3>
           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img className="d-block w-100"
            src="http://www.akbari.com.pk/assets/img/slider/1.jpg"
            alt="Forth slide"
        />
        <Carousel.Caption>
           <h3>Fifth slide label</h3>
           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
    </Carousel.Item>
    
</Carousel>  
   )
 }
}
