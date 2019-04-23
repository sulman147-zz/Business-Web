import React from 'react';
import  '../../styles/model.scss';
import { Container, Row, Col }from 'react-bootstrap';

export default class Smallslider extends React.Component {
render() {
    return (

        <div className="modelsText">
        <h2>Shopping Tools</h2>
          <Container className="Models-colums">
              <Row >
                  <Col className="bg-col col" xs={5}>
                  </Col>
                  <Col className="col"><img width="100%" height="100%"
                       src="https://files1.porsche.com/filestore/image/multimedia/none/panamera-carrange-jdp-2017/normal/3f5807f3-2996-11e7-9f74-0019999cd470;sR;twebp/porsche-normal.webp"
                       alt="First slide"
                      />
                  </Col>
                  <Col className="col"><img width="100%" height="100%"
                       src="https://files1.porsche.com/filestore/image/multimedia/none/macan-carrange-jdp-2017/normal/ede3b79f-86a6-11e8-8d30-0019999cd470;sR;twebp/porsche-normal.webp"
                       alt="First slide"
                      />
                  </Col>
                  <Col className="col"><img width="100%" height="100%"
                       src="https://files1.porsche.com/filestore/image/multimedia/none/cayenne-carrange-jdp-2017/normal/1b87bcd6-93c3-11e7-b591-0019999cd470;sR;twebp/porsche-normal.webp"
                       alt="First slide"
                      />
                  </Col>
              </Row>
          </Container>
      </div>
     
   )
 }
}