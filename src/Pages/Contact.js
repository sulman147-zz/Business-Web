import React, { Component } from 'react';
import axios from 'axios';
import { FaMapMarker ,FaPhone ,FaRegEnvelope ,FaAngleDoubleRight} from 'react-icons/fa';
import { IoIosAddCircle ,IoIosAdd} from "react-icons/io";
import { Container, Row, Col ,Button}from 'react-bootstrap';
import  '../styles/ContactUs.scss';

class Contact extends Component {
    constructor(){
        super()
       this.state = {
            email: {
              recipient:'',
              sender: '',
              subject: '',
              text: ''
            }
          }
      
    }
    sendEmail = () => {
        const { email } = this.state;
        fetch(`http://127.0.0.1:4567/send-email?recipient=${email.recipient}&sender=${email.sender}&topic=${email.subject}&text=${email.text}`) //query string url
          .catch(err => console.error(err))
      }

    render() {
       
        return (
          <div className="Contact">
             <div className="Contact-top">
                 <h1>GET IN TOUCH</h1>
                 <p>If you have any questions about the services we provide simply use the form below. We try and respond to all queries and comments within 24 hours.</p>
             </div>
              
             <Container>
             <Row>
               <Col sm lg="7">
                  <div className="Contact-Form" >
                    <input  placeholder="Your Name:"/>
              
                    <input  placeholder="Your Email:"/>
              
                    <input  placeholder="Your Phone Number:"/>
         
                    <input  placeholder="Your Name:"/>
          
                    <textarea placeholder="Your Message:" />
                    <button  className="Button_c"> SUBMIT NOW<FaAngleDoubleRight size="1.1em"/> </button>
                  </div>
               
                </Col>
                <Col sm lg="4">
                  <div className="Contact-Details">
                    <div><a className="locatior"><FaMapMarker color="skyblue" size="2em"/></a><p>Unit-1: 18Km Multan Road, Lahore-54000, Punjab, Pakistan</p></div>
                    <div><a><FaPhone color="skyblue" size="2em" /></a><p>+92 (0)42-3597 1446-8</p></div>
                    <div><a className="locatior"><FaMapMarker color="skyblue" size="2em"/></a><p>	Unit-2: 10Km Faisalabad Road Khariyanwala, Shaikhupura-39359, Punjab, Pakistan</p></div>
                    <div><a><FaPhone color="skyblue" size="2em" /></a><p>	+92 (0)56-3882 228</p></div>
                    <div><a><FaRegEnvelope color="skyblue" size="2em"/></a><p>info@aci.com.pk</p></div>
                  </div>
                </Col>
              </Row>
            </Container>

          </div>
        );
      }
    }
    export default Contact;
