import React, { useState } from 'react';
import '../styles/components/Header.scss';
import '../styles/components/Services.scss';
import ServiceGrid from './ServiceGrid';
import { withRouter, Link, useRouteMatch, NavLink } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import * as services from '../ServicesOffered.json';
const ServicesOffered = () => {
    const [data, setData] = useState(services.services);
        return(
        <div>
            <Header/>
            <div class="services-header">
                <div class="services-header-title">Services</div>
                <div class="services-header-text">Our marketing professionals are your one stop source for customer support, 
                    training, strategies, lead generation, 
                    lead development, online seminars, and much more. 
                </div>
            </div>
            <div id="sponsor">
                <div class="sponsor-header">OUR SERVICES</div>
                <div class="sponsor-container">
                {data.map( (service) => (
                        <ServiceGrid cardInformation={service}></ServiceGrid>
                ))}
                </div>
            </div>
            <Footer></Footer>
        </div>
        );
}

export default withRouter(ServicesOffered);