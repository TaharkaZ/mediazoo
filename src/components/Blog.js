import React, { useState } from 'react';
import '../styles/components/Header.scss'
import { withRouter, Link, useRouteMatch, NavLink } from 'react-router-dom';
import Header from './Header';

const Blog = () => {

        return(
        <div>
            <Header/>
            <div>Blog</div>
        </div>
        );
}

export default withRouter(Blog);