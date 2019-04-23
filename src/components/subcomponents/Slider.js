import React from "react";
import Slider  from "react-slick";
import  '../../styles/styles.scss';

export default class SimpleSlider extends React.Component {
  render() {
    var settings = {
      arrows:true,
      autoplay:true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows:true 
    };
    return (
      <div className="alignItem">
      <Slider {...settings}>
        <div className="sliderimg">
            <img width="100%" height="100%"
                src="http://aci.com.pk/images/events/203events769.jpg"
                alt="First slide"
            />  
            
        </div>
        <div className="sliderimg">
            <img  width="100%" height="100%"
            src="http://aci.com.pk/images/events/21events815.jpg"
            alt="First slide"
            />
        </div>
        <div className="sliderimg">
            <img  width="100%" height="100%"
            src="http://aci.com.pk/images/events/280events932.jpg"
            alt="First slide"
        />
        </div>
        <div className="sliderimg">
            <img  width="100%" height="100%"
            src="http://aci.com.pk/images/events/461events192.jpg"
            alt="First slide"
        />
        </div>
        <div className="sliderimg">
            <img  width="100%" height="100%"
            src="http://aci.com.pk/images/events/569events516.jpg"
            alt="First slide"
        />
        </div>
        <div className="sliderimg">
            <img  width="100%" height="100%"
            src="http://aci.com.pk/images/events/605events543.jpg"
            alt="First slide"
        />
        </div>
        <div className="sliderimg">
            <img  width="100%" height="100%"
            src="http://aci.com.pk/images/events/748events70.jpg"
            alt="First slide"
        />
        </div>
        <div className="sliderimg">
            <img  width="100%" height="100%"
            src="http://aci.com.pk/images/events/890events747.jpg"
            alt="First slide"
        />
        </div>
        <div className="sliderimg">
        <img  width="100%" height="100%"
        src="http://aci.com.pk/images/events/930events731.jpg"
        alt="First slide"
    />
    </div>
        
      </Slider>
      </div>
    );
  }
}