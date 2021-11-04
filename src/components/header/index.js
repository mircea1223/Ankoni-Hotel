import React from 'react'
import Logo from '../../images/logo-2.png'
import {Link}  from 'react-router-dom'
import MobileMenu from '../../components/MobileMenu'
import './style.css'

const Header = (props) => {
    const SubmitHandler = (e) =>{
        e.preventDefault()
     }

     const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(	
        <div className="middle-header">
            <div className={`header-style-3 ${props.hClass}`}>
                <div className="container-fluid">
                    <div className="header-content">
                    <div className="row align-items-center">
                        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4">
                            <div className="logo">
                                <Link onClick={ClickHandler} to="/home" title=""><img src={Logo} alt=""/></Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-8 d-lg-block d-none">
                            <nav>
                                <ul>
                                    
                                    <li><Link onClick={ClickHandler} to="/about" title="">About</Link></li>  
                                    <li><Link onClick={ClickHandler} to="/faq" title="">Faq</Link></li> 
                                    <li><Link onClick={ClickHandler} to="/service" title="">Services</Link></li>
                                    <li><Link onClick={ClickHandler} to="/contact" title="">Contact</Link></li>
                                </ul>
                            </nav>
                        </div>
                        
                        
                          
                        <div className="col-md-2 col-sm-2 col-2">
                            <MobileMenu/>
                        </div>
                    </div>
                    
                        <div className="clearfix"></div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Header;