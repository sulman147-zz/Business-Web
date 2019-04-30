import React from 'react';
import MainCarousel from '../components/subcomponents/MainCarousel';
import  '../styles/model.scss';
import { Container, Row, Col }from 'react-bootstrap';
import SimpleSlider from '../components/subcomponents/Slider';
import Ourproduct from '../components/subcomponents/Ourproduct';

import Button from 'react-bootstrap/Button';
import FormExample from '../components/subcomponents/GetinTouch';

export default class Home extends React.Component {
    render () {
        return(
    <div className="Model">
      <MainCarousel/> 
      <Ourproduct/> 
      <div className="Note">
               <div className="Note-2">    
               <h3>WE HELP INTERESTING COMPANIES CREATE AND IMPROVE INDUSTRY PRODUCTS AND SERVICES THROUGH LONG LASTING RELATIONSHIP</h3>
               </div>
               <div className="Note-button">
               <Button variant="dark">CONTACT US -></Button>
               </div>
        </div>
        <div className="TextAboutus">
        <h1>ABOUT US</h1>
        <p>Akbari Chemical Industries Private Limited (ACI) was established in 1979 with a vision to produce quality industrial chemicals and to give support to nation’s export potential. 
        Since, its humble inception in 1979 with a Sulphuric Acid Plant, ACI has grown and expanded adding several important industrial chemicals to its products range over three decades. 
        Today, the company’s product range in addition to Sulphuric Acid includes Formic Acid, Aluminium Sulphate, Sodium Sulphate, Single Super Phosphate (SSP), Acetec® and Sulphonic Acid (LABSA). 
        All the products are manufactured on imported technology plants from China, Italy and United Kingdom. Establishment of a Linear Alkyl Benzene Sulphonic Acid (LABSA) or simply ‘Sulphonic acid’ (soft grade) 
        production plant is the latest diversification project of ACI. Keeping in view the gap in supply and demand, ACI is already in process to expand its production facility in near future Insha’Allah.</p>
        </div>
        <div className="TextAboutus">
        <h1>CEO MESSAGE</h1>
        <p>I am pleased to welcome you to the Akbari Chemical Industries (Pvt.) Ltd. (ACI) website. Whether you’re a potential customer with a challenging project ahead; an existing customer checking up on our latest news; or a partner, supplier or future employee looking for new opportunities, I trust you’ll find what you’re looking for here.ACI is a company that is Driving Progress and, with our customers and partners, building better communities through safe, smart, efficient infrastructure. Something we have been doing consistently since 1948.Our progressive thinking and creative approach is what makes us stand out from the crowd. It’s why so many of our customers keep coming back to us.We have a clear vision of what we want to be - leaders in infrastructure development; and we guide our business using five core values - lead, grow, deliver, sustain and protect. I’m proud of the work we do and give you my personal commitment that we will deliver what we promise and do it safely and sustainably.Enjoy our website and feel free to contact us for any additional information.
        Yours Sincerely,
        Monem Akbar
        Chief Executive Officer</p>
        </div>
        <div className="modelimg" >
        <img className="d-block w-100"
            src="http://aci.com.pk/images/factory/dummy.jpg"
            alt="Forth slide"
        />
        </div>
      
            <div className="Pastevents">
              <h2>Past Events</h2>
              <SimpleSlider/>
            </div>
            <div className="contactsection">
              <Container>
                <Row>
                  <Col sm="12" lg="6"> <FormExample/></Col>
                  <Col sm="12" lg="6"><img className="d-block w-100"
                           src="http://aci.com.pk/images/factory/contact_index.jpg"
                        alt="Forth slide"
                  /></Col>
                </Row>
              </Container>;
            </div>

      <section className="indurial-t-solution indurial-solution indpad anim-5-all indurial-t-solution3">
      <div className="container clearfix">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="indurial-solution-text text-center">
              <h2>If you have any question … We are available for you.</h2><span className="contactus-button2 text-center"><a href="contact.php" className="submit">Contact Us </a></span>
            </div>
          </div>
        </div>
      </div>
    </section>
           
            
        <div>
    </div>
    </div>
    )
 }
}
