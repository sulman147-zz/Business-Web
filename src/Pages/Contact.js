import React, { Component } from 'react';
import axios from 'axios';
import { FaMapMarker ,FaPhone ,FaRegEnvelope ,FaAngleDoubleRight} from 'react-icons/fa';
import { IoIosAddCircle ,IoIosAdd} from "react-icons/io";
import { Container, Row, Col ,Button}from 'react-bootstrap';
import  '../styles/ContactUs.scss';









class Contact extends Component {
  constructor(props) {
    super(props);
  this.state = {
      name:'',
      recipient:'waleedmuaz2@gmail.com',
      sender: '',
      subject: '',
      text: ''
  }
}
  
  sendEmail = _ => {
    if(this.state.sender==''){
      alert('please enter your Name ');
    }else if(this.state.sender==''){
      alert('please enter your email id ');
    }else if(this.state.subject==''
    ){
      alert('please enter Proper Subject ');
    }else if(this.state.text==''){
      alert('please enter your Message ');
    }else{
    
    fetch(`http://127.0.0.1:4567/send-email?recipient=${this.state.recipient}&sender=${this.state.sender}&topic=${this.state.subject}&text=${this.state.text}`) //query string url
      .catch(err => console.error('this is erroe'+err));
      alert('Your Email is sent');
      this.setState({
        name:'',
        sender: '',
        subject: '',
        text: ''
                      
    })
  } 
}

    render() {
       const { email } = this.state;
       console.log( email);
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
                    <input value={ this.state.name} onChange={e => this.setState({name:e.target.value})}  placeholder="Your Name:"/>
              
                    <input value={ this.state.sender} onChange={e => this.setState({sender:e.target.value})} placeholder="Your Email:"/>
              
                    <input value={ this.state.subject} onChange={e => this.setState({subject:e.target.value})} placeholder="Subject:"/>
         
                  
          
                    <textarea value={ this.state.text} onChange={e => this.setState({text:e.target.value})} placeholder="Your Message:" />
                    <button  onClick={this.sendEmail} className="Button_c"> SUBMIT NOW<FaAngleDoubleRight size="1.1em"/> </button>
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
