import React, { useState } from 'react';
import '../styles/components/Header.scss'
import { withRouter, Link, useRouteMatch, NavLink } from 'react-router-dom';
import Header from './Header';

const Contact = () => {

        return(
        <div>
            <Header/>
            <div>contact</div>
        </div>
        );
}

export default withRouter(Contact);