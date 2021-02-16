import React, { useState } from 'react';
import '../styles/components/Footer.scss'
import { withRouter, Link, useRouteMatch, NavLink } from 'react-router-dom';

const Contact = () => {

        return(
        <div class="footer">
            <div class="footer-top"><div>MEDIA-ZOO | contact@media-zoo.com | (910)-331-0599  </div>
            
                {/* <div className = "header-links">
                    <NavLink to = "/" exact className = "header-links-item" activeClassName="active">Home</NavLink>
                    <NavLink to = "/Services"className = "header-links-item" activeClassName="active">Services</NavLink>  
                    <NavLink to = "/workwithus"className = "header-links-item" activeClassName="active">Work With Us</NavLink>
                    <NavLink to = "/careers"className = "header-links-item" activeClassName="active">Careers</NavLink>
                </div> */}
                </div>
            <div class="footer-bottom">&#169; 2020 Media-Zoo all rights reserved.</div>
        </div>
        );
}

export default withRouter(Contact);