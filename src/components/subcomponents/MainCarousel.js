import { Carousel }from 'react-bootstrap';
import React from 'react';

export default class MainCarousel extends React.Component {
render() {
    const Style = {
        color: 'black',
        fontWeight: 'bold'
      };
    return (

    <div>
    <Carousel>
    <Carousel.Item >
        <img className="d-block w-100"
            src="https://cdn2.bigcommerce.com/server1800/wy35u1/product_images/uploaded_images/sc-range-house-web-1920x640.jpg"
            alt="First slide"
        />
        <Carousel.Caption>
           <h1 style={Style}>CHEMICAL MANUFACTURER FOR PAST 4 DECADES</h1>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img className="d-block w-100"
            src="https://www.ibu-tec.com/fileadmin/_processed_/0/e/csm_iStock-582256640_zorazhuang_rz_d7a3d7b796.jpg"
            alt="Second slide"
        />
        <Carousel.Caption>
           <h1 style={Style}>WE PRODUCE CHEMICALS FOR INDUSTRIAL USE.</h1>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img className="d-block w-100"
            src="https://cbre.cdnist.com/wp-content/uploads/2018/08/thumbnail-187a23f7c549776a78e747c7baa46664-1920x640.jpeg"
            alt="Third slide"
        />
        <Carousel.Caption>
           <h1 style={Style}>LOOKING INTO THE FUTURE.</h1>
        </Carousel.Caption>
    </Carousel.Item>
    
    
</Carousel>  
</div>
   )
 }
}
