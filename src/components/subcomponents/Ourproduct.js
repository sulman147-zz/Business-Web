import React from 'react';
import  '../../styles/model.scss';
import { Container, Row, Col }from 'react-bootstrap'; 
import Button from 'react-bootstrap/Button'

export default class Ourproduct extends React.Component {
render() {
    return (
            
    <div className="modelsText">
                <h2>OUR PRODUCTS</h2>
                <p>
                    " Akbari Chemical Industries (Pvt.) Ltd produces quality industrial chemicals and fertilizers at its state of the art chemical facility. A complete list of our products is given below:"
                </p>
        <Container>
            <Row>
                <Col xs lg="4" className="col"><img
                    src="http://aci.com.pk/images/products/228product_97.jpg"
                    alt="First slide"
                />
                <h2>Sulphuric Acid</h2>
                <p>Sulphuric Acid is a strong dibasic acid. in addition, it is also a strong oxidizing and dehydrating agent.
                   It is one of the most widely employed chemicals
                   and enters into many industries, though infrequently appearing in the finished material.
                   </p>
          
                </Col>
                <Col xs lg="4"><img w 
                    src="http://aci.com.pk/images/products/574product_496.jpg"
                    alt="First slide"
                />
                <h2>Sulphonic (LABSA)</h2>
                <p>Linear Alkyl Benzene Sulphonic Acid (LABSA) Dodecyl Benzene Sulphonic Acid (DBSA), 
                or simply Sulphonic Acid are few of the several names given to a type of organic acid 
                that can be represented by the general formula R–SO2 –OH, where ‘R’ is usually a 
                hydrocarbon side chain.</p>
                
                </Col>
                <Col xs lg="4" className="col"><img 
                    src="http://aci.com.pk/images/products/74product_454.jpg"
                    alt="First slide"
                />
                <h2>Formic Acid</h2>
                <p>Formic Acid is the simplest and strongest of the series of aliphatic 
                monobasic acids. It can be represented chemically as H–COOH. 
                It is a colourless liquid with a pungent, penetrating odour. 
                It is miscible with water, alcohol, ether, or ethyl acetate.</p>
                </Col>
            </Row>
        </Container>  
        <br/>  
        <Button variant="primary">VIEW ALL</Button>
    </div>
     
   )
 }
}