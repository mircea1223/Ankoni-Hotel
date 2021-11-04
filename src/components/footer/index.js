import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo.png'
import ft1 from '../../images/footer/img-1.jpg'
import ft2 from '../../images/footer/img-2.jpg'
import './style.css'

const Footer = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <footer className="wpo-site-footer">
            <div className="wpo-upper-footer">
                <div className="wpo-footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 custom-grid">
                                
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 custom-grid">
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/"><i className="ti-facebook"></i></Link></li>
                                    <li><Link onClick={ClickHandler} to="/"><i className="ti-twitter-alt"></i></Link></li>
                                    <li><Link onClick={ClickHandler} to="/"><i className="ti-instagram"></i></Link></li>
                                    <li><Link onClick={ClickHandler} to="/"><i className="ti-google"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="widget market-widget wpo-service-link-widget">
                                    <div className="widget-title">
                                        <h3>Contact </h3>
                                    </div>
                                    
                                    <div className="contact-ft">
                                        <ul>
                                            <li><i className="fi ti-location-pin"></i>34, rue Val Fleuri L-1526, Luxembourg</li>
                                            <li><i className="fi ti-mobile"></i>+352123456</li>
                                            <li><i className="fi flaticon-email"></i>ankoni@hotel.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="widget link-widget">
                                    <div className="widget-title">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <ul>
                                        <li><Link onClick={ClickHandler} to="/about">About Us</Link></li>
                                        <li><Link onClick={ClickHandler} to="/room">Our Offers</Link></li>
                                        <li><Link onClick={ClickHandler} to="/service">How Spread</Link></li>
                                        <li><Link onClick={ClickHandler} to="/contact">Contact Us</Link></li>
                                        <li><Link onClick={ClickHandler} to="/service-single">Our Event</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="widget newsletter-widget">
                                    <div className="widget-title">
                                        <h3>Newsletter</h3>
                                    </div>
                                    <form onSubmit={SubmitHandler}>
                                        <div className="input-1">
                                            <input type="email" className="form-control" placeholder="Email Address *" required="" />
                                        </div>
                                        <div className="submit clearfix">
                                            <button type="submit">subscribe<i className="ti-angle-right"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-6 col-md-6 col-12">
                            <div className="term">
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/">Privecy Policy</Link></li>
                                    <li><Link onClick={ClickHandler} to="/">Terms & Condition</Link></li>
                                    <li><Link onClick={ClickHandler} to="/">Cookies</Link></li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;