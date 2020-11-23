import React, {useState} from 'react';
import '../styles/components/Header.scss'
import {withRouter, Link, useRouteMatch, NavLink} from 'react-router-dom';
import Button from '@material-ui/core/Button';

import Header from './Header';
import '../styles/components/Home.scss';
import womanHandshake from '../assets/womanHandshake.jpeg';
import manTelemarketing from '../assets/manTelemarketing.jpeg';
import peopleOnPhone from '../assets/peopleOnPhone.jpeg';


const AboutUs = () => {

    return (
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
                            <Button style={{
                                    backgroundColor: "#182430",
                                    padding: "5px 50px",
                                    fontSize: "18px",
                                    color: "#ffffff"}} 
                                    variant="raised">
                                    Contact Us
                            </Button>
                    </div>
                </div>
                <div class="home-content">
                    <div class="home-row">
                        <div class="home-img-container">
                            <img class="home-img"
                                src={manTelemarketing}/>
                            <div class="home-backdrop-left"></div>
                        </div>
                        <div class="home-text">
                            <div class="home-header">Who We Are</div>
                            <div class="home-description">We’re your on-demand sales, customer service and digital marketing team. Your virtual call center for both in-bound and outbound calls and your client event and new business development analysts. We’re the creators of your online training programs; your telecommuting account managers and your web site’s help desk support. We’re customer service and webcast representatives. Welcome to the Media-Zoo
                            </div>
                        </div>
                    </div>
                </div>
                <div class="home-content">
                    <div class="home-row">
                        <div class="home-text">
                            <div class="home-header">What We Do</div>
                            <div class="home-description">An integral part of the sales process is getting to know your prospects and establishing relationships—Media-Zoo’s marketing professionals identify strategies and techniques to attract customers to a business. Our experts provide strategies for various types of marketing, from email to social media and beyond. We help our clients find and acquire new customers, retain existing ones and increase revenue, faster than they can themselves! Using analytics, predictive modeling, and digital marketing, we pinpoint consumers who are ready to purchase the product or service our client sells. We work with several CRM platforms and can integrate with your existing sales platform to provide real time leads as well as phone, online and chat support. Media-Zoo delivers customized services for your existing customers so we can drive retention and build brand loyalty.
                            </div>
                        </div>
                        <div class="home-img-container">
                            <img class="home-img"
                                src={womanHandshake}/>
                            <div class="home-backdrop-right"></div>
                        </div>
                    </div>
                </div>
                <div class="home-content">
                    <div class="home-row">
                        <div class="home-img-container">
                            <img class="home-img"
                                src={peopleOnPhone}/>
                            <div class="home-backdrop-left"></div>
                        </div>
                        <div class="home-text">
                            <div class="home-header">Who We Do It For</div>
                            <div class="home-description">It's all about engaging with the community, presenting products in fun and interesting ways, and offering a collection of images and posts that appeal to the lifestyle of your end-user. People share a lot of information, and if you monitor and listen to what they are saying, you will eventually be able to engage in a meaningful conversation with them. Media-Zoo partners with forward-thinking companies that share our passion for a positive customer experience and are driven to make a genuine, lasting connection with their customers. 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(AboutUs);
