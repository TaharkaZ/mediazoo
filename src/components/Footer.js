import React, { useState } from 'react';
import '../styles/components/Footer.scss'
import { withRouter, Link, useRouteMatch, NavLink } from 'react-router-dom';

const Contact = () => {

        return(
        <div class="footer">
            <div class="footer-top">MEDIA-ZOO | contact@media-zoo.com | 844-854-0458</div>
            <div class="footer-bottom">&#169; 2020 Media-Zoo all rights reserved.</div>
        </div>
        );
}

export default withRouter(Contact);