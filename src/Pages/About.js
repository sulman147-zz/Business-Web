import React from 'react';
import  '../styles/aboutporsche.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faAngleRight } from '@fortawesome/free-solid-svg-icons'
class Aboutus extends React.Component {
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

export default class About extends React.Component {


    


    render () {
        return(
            <div>
                <div className="D-sec">
                <Aboutus title="The Porsche Principle"  description="The Porsche principle is unique within the world of automotive industry. Learn more here."/>
                <Aboutus title="Porsche at a glance"  description="Quick access to all facts and figures"/>
                <Aboutus title="Newsroom & Press"  description="Always up-to-date the Porsche newstoom and press releases of Porsche AG."/>
                <Aboutus title="Jobs & Careers"  description="We live on the innovations and creativity of our employees. If you want to experience the fascination for <nobr>Porsche</nobr>, find out how you can join our team."/>
                <Aboutus title="Christophorus - The Porsche Magazine"  description="The Porsche magazine, Christophorus, is a company publication that provides information on the company, the activities of the Group and its products."/>
                <Aboutus title="Porsche Museum"  description="Learn all about the new Porsche Museum that is located at Porsche platz in Zuffenhausen."/>
                <Aboutus title="Sustainability"  description="Learn more about our activites in the field of Corporate Social Responsibilty."/>
                <Aboutus title="Services Subsidiaries"  description="In addition to its range of exciting vehicles, Porsche offers a spectrum of services for technical vehicle developments and related areas."/>
                <Aboutus title="Porsche Middle East & Africa"  description="The regional Porsche office based in Dubai was established in 1999 to support our partners through dedicated personnel in the GCC, Levant and African countries."/>
                <Aboutus title="Importer Information"  description="Experience Porsche in your country and receive local information about events, services, prices, stock cars as well as contact details."/>
                </div>
            
            </div>
        );
        }
       }