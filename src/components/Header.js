import React, { useState } from 'react';
import '../styles/components/Header.scss'
import { withRouter, Link, useRouteMatch, NavLink } from 'react-router-dom';

const Header = () => {

        return(
        <div id = "header">
            <div className = "header-container">
                <div className = "header-logo">Media Zoo</div>
                <div className = "header-links">
                    <NavLink to = "/" exact className = "header-links-item" activeClassName="active">Home</NavLink>
                    <NavLink to = "/Services"className = "header-links-item" activeClassName="active">Services</NavLink>  
                    <NavLink to = "/Contact"className = "header-links-item" activeClassName="active">Contact</NavLink>
                    <NavLink to = "/Blog"className = "header-links-item" activeClassName="active">Blog</NavLink>
                </div>
            </div>
        </div>
        );
}

export default withRouter(Header);