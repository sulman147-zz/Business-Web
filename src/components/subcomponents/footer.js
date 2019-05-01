import React from 'react';
import { NavLink} from 'react-router-dom';
import  '../../styles/footer.scss';
import Button from 'react-bootstrap/Button';


const  Footer = () => (
    <div className="footer">
        
    <footer className="sec-padding footer-bg footer-bg3">
        <div className="container clearfix">
            <div className="row">
                <div className="widget about-us-widget col-md-3 col-sm-6"><a href="#"><img src="http://aci.com.pk/images/header/a_logo_white.png" alt=""/></a>
                    <p>Akbari Chemical Industries (Pvt.) Ltd Was established in 1979 with a Vision to produce quality industrial Chemicals and to give support to Nation’s export potential.</p>
                    <a href="About">Read More <i className="fa fa-angle-double-right"></i></a>
                   
                </div>
                <div className="widget widget-links col-md-3 col-sm-6">
                    <h4 className="widget_title">Our Products</h4>
                    <div className="widget-contact-list row m0">
                        <ul>
                            <li><a href="Products">Sulphuric Acid</a></li>
                            <li><a href="Products">Formic Acid</a></li>
                            <li><a href="Products">Sulphonic Acid(LABSA)</a></li>
                            <li><a href="Products">Sodium Sulphate</a></li>
                            <li><a href="Products">Aluminium Sulphate</a></li>
                            <li><a href="Products">ACETEC</a></li>
                            <li><a href="Products">Sinle Super Phosphate (SSP)</a></li>
                        </ul>
                    </div>
                </div>
                <div className="widget widget-links col-md-3 col-sm-6">
                    <h4 className="widget_title">Quick Links</h4>
                    <div className="widget-contact-list row m0">
                        <ul>
                            <li><a href="About.php">About Us</a></li>
                            <li><a href="Products">Products</a></li>
                            <li><a href="ContactUs">Get Quote</a></li>
                            <li><a href="/">Events</a></li>
                        </ul>
                    </div>
                </div>
                <div className="widget widget-contact col-md-3 col-sm-6">
                    <h4 className="widget_title">Get in Touch</h4>
                    <div className="widget-contact-list row m0">
                    <ul>
                        <li><i className="fa fa-map-marker"></i>
                            <div className="fleft location_address">Unit-1: 18Km Multan Road,<br/> Lahore</div>
                        </li>
                        <li><i className="fa fa-phone"></i>
                            <div className="fleft contact_no"><a href="#">+92 (0)42-3597 1446-8</a></div>
                        </li>
                        <li><i className="fa fa-map-marker"></i>
                            <div className="fleft location_address">Unit-2: 10Km Faisalabad Road,<br/>Kharianwala SKP</div>
                        </li>
                        <li><i className="fa fa-envelope-o"></i>
                            <div className="fleft contact_mail"><a href="mailto:info@woodworkshop.com">info@aci.com.pk</a></div>
                        </li>
                        <li><i className="icon icon-Timer"></i>
                            <div className="fleft service_time">Mon - Sat : 9:00 AM to 5:30 PM</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  </footer>



</div>
);

export default Footer;