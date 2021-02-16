import React, { useState } from 'react';
import '../styles/components/Header.scss';
import '../styles/components/Services.scss';
import '../styles/components/Careers.scss';
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
            <div class="services-header-title">Careers</div>
                <pre class="services-header-text">Work from Home &#9; Enjoy Freedom &#9; Make money!
                </pre>
            </div>
            <div class="careers-conent">
                <div class="careers-block bold">Come join one of the TOP digital marketing companies in the country.</div>
               <div class="careers-block">Enjoy unprecedented uncapped earning potential by joining the Media-Zoo! Our clientele varies from Fortune 500 companies to emerging start-ups and we’re looking for the best to grow with us. If your specialty is inside or outside sales or if you have interest or experience working in a call center environment your career begins here.</div>
               <div class="careers-block">We're looking for amazing representatives to promote and support our customer’s services and solutions. We will supply the tools, training, and sales support to empower you. You bring the work ethic to succeed.</div>
               <div class="careers-block">Our customer service representatives work in a fast-paced call center environment supporting some of the world’s best brands. You’ll be on the front line helping us solve our customers’ challenges-and deliver on our promise of superior customer service.</div>
               <div>
                   <div class="careers-block">You’ll need to have:</div>
                   <ul>
                       <li class="careers-li">Associate’s degree or one or more years of work experience.</li>
                       <li class="careers-li">Willingness to work evenings and some weekends (if required).</li>
                   </ul>
                </div>
               
            </div>
            <div class="careers-call-to-action">Contact Media-Zoo today and find out how to get started <a class="btn" href="mailto:contact@media-zoo.com">Apply Now</a></div>
            <Footer></Footer>
        </div>
        );
}

export default withRouter(ServicesOffered);