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
                    <a href="about.php">Read More <i className="fa fa-angle-double-right"></i></a>
                    <ul className="nav">
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
                        <li><a href="#"><i className="fa fa-facebook-square"></i></a></li>
                        <li><a href="#"><i className="fa fa-skype"></i></a></li>
                        <li><a href="#"><i className="fa fa-pinterest-square"></i></a></li>
                    </ul>
                </div>
                <div className="widget widget-links col-md-3 col-sm-6">
                    <h4 className="widget_title">Our Products</h4>
                    <div className="widget-contact-list row m0">
                        <ul>
                            <li><a href="sulphuric_acid.php">Sulphuric Acid</a></li>
                            <li><a href="formic_acid.php">Formic Acid</a></li>
                            <li><a href="linear_benzene.php">Sulphonic Acid(LABSA)</a></li>
                            <li><a href="sodium_sulphate.php">Sodium Sulphate</a></li>
                            <li><a href="aluminium_sulphate.php">Aluminium Sulphate</a></li>
                            <li><a href="acetec.php">ACETEC</a></li>
                            <li><a href="single_super_phosphate.php">Sinle Super Phosphate (SSP)</a></li>
                        </ul>
                    </div>
                </div>
                <div className="widget widget-links col-md-3 col-sm-6">
                    <h4 className="widget_title">Quick Links</h4>
                    <div className="widget-contact-list row m0">
                        <ul>
                            <li><a href="about.php">About Us</a></li>
                            <li><a href="careers.php">Careers</a></li>
                            <li><a href="request-quote.php">Get Quote</a></li>
                            <li><a href="index.php#event_section">Events</a></li>
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