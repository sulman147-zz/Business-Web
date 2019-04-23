
import React from 'react';
import { NavLink} from 'react-router-dom';
import  '../../styles/styles.scss';
import Button from 'react-bootstrap/Button';


const  Header = () => (
    <div>
        <div className="Logo-box">
            <span className="logo">
                <img src="http://aci.com.pk/images/header/akbari_logo.png" width="100%" height="100%"/>
            </span>
            <div>
               <h3>info@aci.com.pk</h3>
               <Button variant="warning">REQUET A QUOTE</Button>
            </div>
        </div>
    <header className="head" >
    <NavLink to="/" activeClassName="is-active" exact= {true} className="headNav">HOME </NavLink>
    <NavLink to="/Porsche-Finder" activeClassName="is-active" className="headNav">ABOUT US</NavLink>
    <NavLink to="/Motorsport-&-Event" activeClassName="is-active" className="headNav">PRODUCTS</NavLink>
    <NavLink to="/Service-&-Accessories" activeClassName="is-active" className="headNav"> GROUP COMPANIES</NavLink>
    <NavLink to="/About-Porsche" activeClassName="is-active" className="headNav"> CONTACT US</NavLink>
    </header>
    </div>
);

export default Header;