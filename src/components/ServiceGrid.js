import React, { useState } from 'react';
import '../styles/components/Header.scss';
import '../styles/components/ServiceGrid.scss';
import { withRouter, Link, useRouteMatch, NavLink } from 'react-router-dom';
import Header from './Header'
import * as services from '../ServicesOffered.json';
const ServicesOffered = (props) => {
    const [data, setData] = useState(services.services);
    const [flipped , setFlipped ] = useState(false);
    
        const flip = () => {
            setFlipped(!flipped);
        }

        return(
            <div id = "sponsor-grid">
            <div className = { "sponsor-grid-card" + ((flipped) ? " flipped" : "") } onClick = {flip}>
                <div className = "sponsor-grid-front">
                    {props.cardInformation.ServiceType}
                </div>
                <div className = "sponsor-grid-back">
                    {props.cardInformation.Description}
                </div>
            </div>
        </div>         
        );

        
}

export default withRouter(ServicesOffered);