import React from 'react';
import  '../../styles/model.scss';
import {Col,Button} from 'react-bootstrap'; 



export default class FormExample extends React.Component { 
    
    
    handleSubmit() {
        alert('A name was submitted: ' );
       
      }


    render() {
      
      return (
          <div className="contactform">
            <form onSubmit={this.handleSubmit}>
                <Col sm={12} >
                    <input type="email" placeholder="Your Name:" className="input" />
                </Col>
                <Col sm={12} >
                    <input type="email" placeholder="Your Email" className="input" />
                </Col>
                <Col sm={12} >
                    <input type="email" placeholder="Your Phone Number" className="input" />
                </Col>
                <Col sm={12} >
                    <input type="password" placeholder="Subject" className="input" />
                </Col>
            
                <textarea className="inputmessage">
                   Your Message:
                </textarea>

                
                <Col sm={{ span: 10, offset: 4 }}>
                <Button  type="submit" variant="warning">SUBMIT N0W -></Button>
                </Col>
        </form>
        </div>
      );
    }
  }
  