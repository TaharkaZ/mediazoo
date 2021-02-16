import React, { useState } from 'react';
import '../styles/components/Header.scss';
import '../styles/components/Services.scss';
import '../styles/components/WorkWithUs.scss';
import ServiceGrid from './ServiceGrid';
import { withRouter, Link, useRouteMatch, NavLink } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import LaptopWoman from '../assets/laptopWoman.png';
import * as services from '../ServicesOffered.json';
const ServicesOffered = () => {
    const [data, setData] = useState(services.services);
        return(
        <div>
            <Header/>
            <div class="services-header">
                <div class="services-header-title">Work With Us</div>
                <pre class="services-header-text">If your B2B marketing team is on the hook to create more opportunities, faster, Media-Zoo is the answer! 
                </pre>
            </div>
            <div class="workwithus-row">
                <div class="workwithus-left">
                    <img src={LaptopWoman} class="workwithus-img"></img>
                </div>
                <div class="workwithus-content">
                <div class="workwithus-block bold">Learn how our demand generation team can help you execute smarter programs that impact revenue!</div>
                <div class="workwithus-block">We are a business that thrives on delivering results for our clients. Media-Zoo creates tailored digital marketing strategy with the end goal being driving results, meaningful engagement, and actionable ideas on how to convert lead generation into sales.</div>
                </div>
            </div> 
            <div class="workwithus-call-to-action">Contact Media-Zoo to get started <a class="btn" href="mailto:contact@media-zoo.com">Contact Us</a></div>
            <Footer></Footer>
        </div>
        );
}

export default withRouter(ServicesOffered);