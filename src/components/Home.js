import React, { useState } from 'react';
import '../styles/components/Header.scss'
import { withRouter, Link, useRouteMatch, NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Header from './Header';
import '../styles/components/Home.scss';
import womanHandshake from '../assets/womanHandshake.jpeg';
import manTelemarketing from '../assets/manTelemarketing.jpeg';
import peopleOnPhone from '../assets/peopleOnPhone.jpeg';

const AboutUs = () => {

        return(
        <div>
            <Header/>
            <div id="home">
                <div class="hero">
                    <div class="hero-text">
                        <div class="hero-header">
                            Elevate Your Business
                        </div>
                        <div class="hero-subheading">
                            Media-Zoo is your dedicated lead generation, demand creation and customer service support team
                        </div>
                        <Button variant="contained" color="primary" size="large">Our Services</Button>
                    </div>
                </div>
                <div class="home-content">
                    <div class="home-row">
                        <div class="home-img-container">
                            <img class="home-img"src={manTelemarketing}/>
                            <div>Background</div>
                        </div>
                        <div class="home-text">
                            <div class="home-header">Who We Are</div>
                            <div class="home-description">We’re your on-demand sales, customer service and digital marketing team. Your virtual call center for both in-bound and outbound calls and your client event and new business development analysts. We’re the creators of your online training programs; your telecommuting account managers and your web site’s help desk support. We’re customer service and webcast representatives. Welcome to the Media-Zoo </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
}

export default withRouter(AboutUs);