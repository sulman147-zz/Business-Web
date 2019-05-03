import React from 'react';
import { NavLink} from 'react-router-dom';
import  '../../styles/ourproduct.scss';
import { Container, Row, Col }from 'react-bootstrap'; 
import Button from 'react-bootstrap/Button'

export default class Ourproduct extends React.Component {
render() {
    return (
            
    <div className="modelsText">
               <div className="abo">
               <h1>ABOUT</h1>
               <p>Established in 1992, we, Astrra Chemicals, based in Chennai, are among the prominent manufacturers, suppliers, wholesalers and exporters of an extensive array of high quality Industrial Chemicals. Our effective product range comprises of Construction Chemicals, Antioxidant Chemicals and Aromatic Chemicals. These chemicals are processed from high-grade ingredients, which are procured from well-known vendors. The chemicals offered by us are processed by cutting-edge machinery based on advanced technology in accordance with the industry-set norms and regulations. Offered chemicals are highly demanded in the market for their accurate composition, high purity and longer shelf life. Available with us at industry leading prices, these chemicals are widely used for manufacturing adhesives, artificial marbles, batteries, biscuits, ceramic tiles and cosmetics. Moreover, we manufacture FRP Products - Raw Materials, De-ionized Water, Essential Oils, Industrial Dyes, Industrial Pigments and Industrial Solvents.</p>
               <br/>
               <p>Founded by Late. Mr. K. Fatechand Chabria, our company has attained remarkable growth in this domain due to our customer-centric approach coupled with timely delivery, customer support and hassle-free payment terms. We export our products all over the world.</p>
               <br/>
               <p>Driven by a quality-conscious approach, our organization works hard towards maintaining the international quality of the Mineral and Chemicals offered by us. For keeping a close watch on the quality, we have recruited expert professionals, who apply rigid quality checks on each and every product. Further, they check the products at each level of manufacturing process, to ensure that our products are formulated with consistent and unrivaled quality. Some of the parameters based on which we conduct testing are as follows: </p>
               <br/>
               <p>We supply to various industries like Adhesive, Artificial Marble, Battery, Biscuits, Brake Industry, Ceramic, Ceramic Tiles, Construction, Cosmetics, Effluent Treatment, Fertilizer, Flavor and Fragrance, Food, Foundry, FRP, Insulations, Lime Salts, Oil well drilling, Paint, Paper, Pesticide, Pharmaceutical, Poultry / Cattle feed, Printing Ink, Reconditioning Acidic Oil, Resins, Rubber, Silicone, Sugar, Textile, Toothpaste, Vegetable/Industrial Oil Water Treatment and Various other industries</p>
               <br/>
            
               </div>

           <div className="Prod">
            <h1>Products</h1>
            <Row>
                <Col xs="12" sm="6" lg="3" className="col"><img height="300px" width="100%"
                    src="http://aci.com.pk/images/products/74product_454.jpg"
                    alt="First slide"
                />
                <NavLink to="/Products"  className="butt"><h6>Industrial Chemicals</h6></NavLink>
                
          
                </Col>
                <Col xs="12" sm="6" lg="3" className="col"><img height="300px" width="100%"
                    src="http://aci.com.pk/images/products/574product_496.jpg"
                    alt="First slide"
                />
                <NavLink to="/Products"  className="butt">Self manufactured</NavLink>
                
                
                </Col>
                <Col xs="12" sm="6" lg="3" className="col"><img height="300px" width="100%"
                    src="http://aci.com.pk/images/products/74product_454.jpg"
                    alt="First slide"
                />
                <NavLink to="/Products"  className="butt">Janitorial and Cleaning products</NavLink>
                
                
                </Col>
                <Col xs="12" sm="6" lg="3" className="col"><img height="300px" width="100%"
                src="http://aci.com.pk/images/products/74product_454.jpg"
                alt="First slide"
                />
                <NavLink to="/Products"  className="butt">Cosmetic and pharma industry</NavLink>
                
                
                </Col>
            </Row> 
            </div>
        <br/>  
        <Button variant="primary" size="lg">VIEW ALL</Button>
    </div>
     
   )
 }
}