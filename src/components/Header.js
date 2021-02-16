import React, { useState } from 'react';
import '../styles/components/Header.scss'
import { withRouter, Link, useRouteMatch, NavLink } from 'react-router-dom';

const Header = () => {

        return(
        <div id = "header">
            <div className = "header-container">
                <div className = "header-logo">Media-Zoo</div>
                <div className = "header-links">
                    <NavLink to = "/" exact className = "header-links-item" activeClassName="active">Home</NavLink>
                    <NavLink to = "/Services"className = "header-links-item" activeClassName="active">Services</NavLink>  
                    <NavLink to = "/workwithus"className = "header-links-item" activeClassName="active">Work With Us</NavLink>
                    <NavLink to = "/careers"className = "header-links-item" activeClassName="active">Careers</NavLink>
                </div>
            </div>
        </div>
        );
}

export default withRouter(Header);