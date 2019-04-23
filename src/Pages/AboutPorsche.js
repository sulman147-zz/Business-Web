import React from 'react';
import { Row, Col }from 'react-bootstrap';
import  '../styles/aboutporsche.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faAngleRight } from '@fortawesome/free-solid-svg-icons'

class About extends React.Component {
    render() {
        return (
         <div className="about">
         <FontAwesomeIcon icon={ faAngleRight} color="red" size="2x"/>
         <div className="text">
         <a href="" className="link">
         <span className="text"><strong>{this.props.title}</strong><br/>{this.props.description}</span>
         </a>
         </div>
         </div>
         
        );
    }
}

export default class AboutPorsche extends React.Component {


    


    render () {
        return(
            <div>
              <Row>
                    <Col className="col"><img width="100%" height="100%"
                    src="https://files1.porsche.com/filestore/image/multimedia/none/aboutporsche-xle/normal/1e37c200-6414-11e3-8f5f-001a64c55f5c;s25/porsche-normal.jpg"
                    alt="First slide"
                    /></Col>
                </Row>
                
                <div className="D-sec">
                <About title="The Porsche Principle"  description="The Porsche principle is unique within the world of automotive industry. Learn more here."/>
                <About title="Porsche at a glance"  description="Quick access to all facts and figures"/>
                <About title="Newsroom & Press"  description="Always up-to-date the Porsche newstoom and press releases of Porsche AG."/>
                <About title="Jobs & Careers"  description="We live on the innovations and creativity of our employees. If you want to experience the fascination for <nobr>Porsche</nobr>, find out how you can join our team."/>
                <About title="Christophorus - The Porsche Magazine"  description="The Porsche magazine, Christophorus, is a company publication that provides information on the company, the activities of the Group and its products."/>
                <About title="Porsche Museum"  description="Learn all about the new Porsche Museum that is located at Porsche platz in Zuffenhausen."/>
                <About title="Sustainability"  description="Learn more about our activites in the field of Corporate Social Responsibilty."/>
                <About title="Services Subsidiaries"  description="In addition to its range of exciting vehicles, Porsche offers a spectrum of services for technical vehicle developments and related areas."/>
                <About title="Porsche Middle East & Africa"  description="The regional Porsche office based in Dubai was established in 1999 to support our partners through dedicated personnel in the GCC, Levant and African countries."/>
                <About title="Importer Information"  description="Experience Porsche in your country and receive local information about events, services, prices, stock cars as well as contact details."/>
                </div>
            
            </div>
        );
        }
       }